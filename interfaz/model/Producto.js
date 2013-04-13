Ext.define('NL.model.Producto', {
    extend: 'Ext.data.Model',
    fields: [
    {name:'id'},
    {name:'nombre'},
    {name:'precio_comercial', type:'int'},
    {name:'precio_mayorista', type:'int'},
    {name:'stock',  type:'int'}]
});

