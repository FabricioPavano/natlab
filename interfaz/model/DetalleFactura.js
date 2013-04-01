Ext.define('NL.model.DetalleFactura', {
    extend: 'Ext.data.Model',
    fields: [
    {name:'id'       },
    {name:'cantidad' },
    {name:'producto_id'     },
    {name:'producto_nombre' },
    {name:'producto_precio' },
    {name:'subtotal'        }]
});

