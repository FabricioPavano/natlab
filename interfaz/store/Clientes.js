Ext.define('NL.store.Clientes', {
  extend: 'Ext.data.Store',
  model: 'NL.model.Cliente',
  autoLoad: true,
  proxy: {
    type: 'ajax',
    api: {
      read: SITE_URL + '/clientes/buscar', 
      update: SITE_URL + '/clientes/editar'
    },
  }
});

