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
        dataIndex: 'precio_mayorista',
    }, {
        type: 'numeric',
        dataIndex: 'precio_comercial',
    },{
        type: 'numeric',
        dataIndex: 'stock'
    }]
};



Ext.define('NL.view.productos.Lista' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaproductos',
    itemId: 'listaproductos',
    store: 'Productos',
    title: 'Lista de Productos',
    initComponent: function() {

        this.columns = [
        {
          header: 'Nombre',
          dataIndex: 'nombre',
          flex: 1
        },
        { 
          header: 'Precio Mayorista',
          dataIndex: 'precio_mayorista',
          flex: 0.4,
          xtype:'numbercolumn',
          format: '0.00 Bs.'
        },
        { 
          header: 'Precio Comercial',
          dataIndex: 'precio_comercial',
          flex: 0.4,
          xtype:'numbercolumn',
          format: '0.00 Bs.'
        },
        {
          header: 'Stock',
          dataIndex: 'stock',
          flex: 0.4,
          format:'0',
          xtype:'numbercolumn'
        },
        {
          xtype:'actioncolumn',
          width:70,
          items: [
        {
          icon: url_icono_stock,
          tooltip: 'Aumentar/Disminuir Stock',
          handler:function(view, rowIndex, colIndex, item, e, record){

            var view = Ext.widget('ventanastock',{
                record: record
            });

            view.down('form').loadRecord(record);

          }
        },
        {
          icon: url_icono_borrar,
          tooltip: 'Borrar',
          handler: function(grid, rowIndex, colIndex) {

            var proxy          = grid.getStore().getProxy();
            var record         = grid.getStore().getAt(rowIndex);    
            var nombreProducto = record.get('nombre')

            function borrarProducto(boton){

              if(boton = 'yes'){

                  //Hacemos el request para eliminarlo de la BD

                  var operation = new Ext.data.Operation({
                      action: 'destroy',
                      url: SITE_URL + '/productos/borrar/' + record.get('id')
                  });

                  proxy.destroy(operation);

                  //Eliminamos el item de la interfaz

                  grid.getStore().removeAt(rowIndex)
              }
            }    

            Ext.MessageBox.confirm('Confirmar', 'Seguro desea borrar ' + nombreProducto + '?' , borrarProducto);
         }
    }]
    }
    ];

        this.features = [filtrosProductos]; 

        this.callParent(arguments);
    }
});