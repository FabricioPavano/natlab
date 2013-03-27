Ext.define('NL.view.productos.Lista' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaProductos',
    store: 'Productos',
    title: 'Lista de Productos',

    initComponent: function() {

        this.columns = [
            {header: 'Nombre',  dataIndex: 'nombre',  flex: 1},
            {header: 'Precio', dataIndex: 'precio', flex: 0.3},
            {header: 'Stock', dataIndex: 'stock', flex: 0.3}
        ];

        this.callParent(arguments);
    }
});