var filtrosProductos = {
    ftype: 'filters',
    autoReload: false, //don't reload automatically
    local: true, 
    // filters may be configured through the plugin,
    // or in the column definition within the headers configuration
    filters: [
    {
        type: 'string',
        dataIndex: 'nombre'
    }, {
        type: 'numeric',
        dataIndex: 'precio'
    }, {
        type: 'numeric',
        dataIndex: 'stock'
    }]
};



Ext.define('NL.view.productos.Lista' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaproductos',
    store: 'Productos',
    title: 'Lista de Productos',
    initComponent: function() {

        this.columns = [
            {header: 'Nombre',  dataIndex: 'nombre',  flex: 1},
            {header: 'Precio', dataIndex: 'precio', flex: 0.3, xtype:'numbercolumn'},
            {header: 'Stock', dataIndex: 'stock', flex: 0.3, xtype:'numbercolumn'}
        ];

        //this.features = [filtrosProductos]; 

        this.callParent(arguments);
    }
});