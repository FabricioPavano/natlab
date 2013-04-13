Ext.define('NL.store.DetallesFacturas', {
  extend: 'Ext.data.Store',
  model: 'NL.model.DetalleFactura',
  autoLoad: false,
  proxy:{
    type:'memory'
  }
});

