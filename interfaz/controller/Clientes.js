Ext.define('NL.controller.Clientes', {

    extend: 'Ext.app.Controller',
    
    stores: ['Clientes'],

    views:['clientes.Menu',
           'clientes.Lista',],
    

    init: function() {
      this.control({
          'menuclientes button[target=listar]': {
              click: this.abrirListaClientes
          }
      });        
    },

    abrirListaClientes:function(){
        Ext.getCmp('regionCentral').getLayout().setActiveItem('listaclientes')
    },
});