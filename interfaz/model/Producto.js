Ext.define('NL.model.Producto', {
    extend: 'Ext.data.Model',
    fields: [
    {name:'nombre'},
    {name:'precio', type:'int'},
    {name:'stock',  type:'int'}]
});

