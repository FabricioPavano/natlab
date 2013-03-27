Ext.define('NL.store.Productos', {
  extend: 'Ext.data.Store',
  model: 'NL.model.Producto',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    api: {
      read: 'data/users.json',
      update: 'data/updateUsers.json'
    },
    reader: {
      type: 'json',
      root: 'users',
      successProperty: 'success'
    }
  }
});