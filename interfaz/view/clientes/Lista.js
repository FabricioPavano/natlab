var filtrosClientes = {
    ftype: 'filters',
    autoReload: false, //don't reload automatically
    local: true, 
    filters: [
    {
        type: 'string',
        dataIndex: 'nombre'
    },{
        type: 'string',
        dataIndex: 'domicilio'
    },{
        type: 'string',
        dataIndex: 'estado'
    },{
        type: 'string',
        dataIndex: 'ciudad'
    },{
        type: 'string',
        dataIndex: 'telefono'
    },{
        type: 'string',
        dataIndex: 'rif'
    }]
};



Ext.define('NL.view.clientes.Lista' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaclientes',
    itemId: 'listaclientes',
    store: 'Clientes',
    title: 'Lista de Clientes',
    initComponent: function() {

        this.columns = [
        {
          header: 'Nombre',
          dataIndex: 'nombre',
          flex: 1
        },
        { 
          header: 'Domicilio',
          dataIndex: 'domicilio',
          flex: 1
        },
        {
          header: 'Estado',
          dataIndex: 'estado',
          flex: 0.4
        },
        {
          header: 'Ciudad',
          dataIndex: 'ciudad',
          flex: 0.4
        },
        {
          header: 'Telefono',
          dataIndex: 'telefono',
          flex: 0.4
        },
        {
          header: 'Rif',
          dataIndex: 'rif',
          flex: 0.4
        },
        {
          xtype:'actioncolumn',
          width:70,
          items: [
          {
            icon: url_icono_borrar,
            tooltip: 'Borrar',
            handler: function(grid, rowIndex, colIndex) {

              var proxy          = grid.getStore().getProxy();
              var record         = grid.getStore().getAt(rowIndex);    
              var nombreCliente = record.get('nombre')

              function borrarCliente(boton){

                if(boton = 'yes'){

                    //Hacemos el request para eliminarlo de la BD

                    var operation = new Ext.data.Operation({
                        action: 'destroy',
                        url: SITE_URL + '/clientes/borrar/' + record.get('id')
                    });

                    proxy.destroy(operation);

                    //Eliminamos el item de la interfaz

                    grid.getStore().removeAt(rowIndex)
                }
              }    

              Ext.MessageBox.confirm('Confirmar', 'Seguro desea eliminar al cliente ' + 
                nombreCliente + ' de la base de datos?' , borrarCliente);
           }
    }]
    }
    ];

        this.features = [filtrosClientes]; 

        this.callParent(arguments);
    }
});