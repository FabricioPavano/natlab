  Ext.define('NL.store.Productos', {
    extend: 'Ext.data.Store',
    model: 'NL.model.Producto',
    autoLoad: true,

    proxy: {
      type: 'ajax',
      api: {
        read: SITE_URL + '/productos/buscar' 
      }
    }
  });

