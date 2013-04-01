Ext.define('NL.controller.Facturacion', {

    extend: 'Ext.app.Controller',
    
    stores: ['DetallesFacturas'],

    views:['facturacion.Menu',
           'facturacion.Panel',
           'facturacion.DetalleFactura',
           'general.BuscadorClientes',
           'general.BuscadorProductos'],

    init: function() {
        this.control({
          'menufacturacion button[target=crear]': {
              click: this.abrirFormularioCreacionFactura
          },  
          'panelfacturacion buscadorclientes': {
              select: this.clienteSeleccionado
          },
          'panelfacturacion textfield[name=cantidad]': {
              specialkey: this.
          }
        })
    },


    abrirFormularioCreacionFactura: function(button){
      Ext.getCmp('regionCentral').getLayout().setActiveItem('panelfacturacion')        
    },

    clienteSeleccionado: function(combo, record){
      //dejo esta funcion por si la necesito utilizar en el futuro
      // var input = Ext.ComponentQuery.query('panelfacturacion buscadorproductos')[0];
      //combo.blur()
      //input.focus()
    },

    productoSeleccionado: function(){
      //dejo esta funcion por si la necesito utilizar en el futuro
    }
});