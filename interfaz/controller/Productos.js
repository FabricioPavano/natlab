Ext.define('NL.controller.Productos', {

    extend: 'Ext.app.Controller',

    stores: ['Productos'],
    
    views:['productos.Menu',
           'productos.Lista',
           'productos.Formulario',
           'productos.VentanaStock'],

    init: function() {
       this.control({
           'menuproductos button[target=listar]': {
               click: this.abrirListaProductos 
           },
           'menuproductos button[target=crear]': {
               click: this.abrirFormularioCreacionProducto
           },
           'listaproductos': {
               itemdblclick: this.abrirFormularioEdicionProducto
           },
           'formularioproductos button[action=guardar]': {
               click: this.guardarEdicionProducto
           }
       });
    },


    abrirListaProductos:function(){
        Ext.getCmp('regionCentral').getLayout().setActiveItem('listaproductos')
    },

    abrirFormularioCreacionProducto:function(){
        var view = Ext.widget('formularioproductos', {edicion:false});
    },

    abrirFormularioEdicionProducto: function(grid, record) {
        var view = Ext.widget('formularioproductos',
         {
          edicion:true,
          record:record
         });
        
        view.down('form').loadRecord(record);
    },

    guardarEdicionProducto: function(button){
        var win    = button.up('window'),
        form   = win.down('form');
       
        if(!form.getForm().isValid()){
           return
        }

        if(form.isDirty()){
          
          Ext.Ajax.request({
              url: SITE_URL + '/productos/editar',
              params: form.getValues(),
              success: function(response){
                Ext.StoreManager.lookup('Productos').load();        
              }
          });

        }
        
        win.destroy();

    }




});