Ext.define('NL.controller.Clientes', {

    extend: 'Ext.app.Controller',
    
    stores: ['Clientes'],

    views:['clientes.Menu',
           'clientes.Lista',
           'clientes.Formulario'],
    

    init: function() {
      this.control({
          'menuclientes button[target=listar]': {
              click: this.abrirListaClientes
          },
          'menuclientes button[target=crear]': {
              click: this.abrirFormularioCreacionCliente
           },
           'listaclientes': {
              itemdblclick: this.abrirFormularioEdicionCliente
           },
           'formularioclientes button[action=guardar]': {
               click: this.guardarEdicionCliente
           }
      });        
    },

    abrirListaClientes:function(){
        Ext.getCmp('regionCentral').getLayout().setActiveItem('listaclientes')
    },
    abrirFormularioCreacionCliente:function(){
        var view = Ext.widget('formularioclientes');
    },
    abrirFormularioEdicionCliente:function(grid, record){
        var view = Ext.widget('formularioclientes',
         {
          edicion:true,
          record:record
         });
        
        view.down('form').loadRecord(record);
1   },
    guardarEdicionCliente: function(button){
        var win    = button.up('window'),
        form   = win.down('form');
       
        if(!form.getForm().isValid()){
           return
        }

        if(form.isDirty()){
          
          Ext.Ajax.request({
              url: SITE_URL + '/clientes/editar',
              params: form.getValues(),
              success: function(response){
                Ext.StoreManager.lookup('Clientes').load();        
              }
          });

        }
        
        win.destroy();

    }

});