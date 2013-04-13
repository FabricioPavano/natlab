Ext.define('NL.model.DetalleFactura', {
    extend: 'Ext.data.Model',
    idProperty: 'producto_id',    
    fields: [
    {name:'cantidad' },
    {name:'producto_id'     },
    {name:'producto_nombre' },
    {name:'precio'          },
    {name:'subtotal'        }]
});

