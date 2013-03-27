Ext.application({
    requires: ['Ext.container.Viewport',
               'Ext.window.MessageBox'],

    name: 'NL',
    appFolder: 'app',

    controllers: ['Principal', 'Productos','Clientes','Facturacion','Estadisticas'],
    
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            padding: '0 150 0 150', //esto le da el efecto centrado a la aplicacion
            items: [
            {
                region:'west',
                title:'NatLab',
                flex:0.3,
                layout:{
                    type: 'accordion',
                    titleCollapse: true,
                    animate: true,
                },
                items:[{
                    xtype:'menuproductos'
                },
                {
                    xtype:'menuclientes'
                },
                {
                    xtype:'menufacturacion'
                },
                {
                    xtype:'menuestadisticas'
                }]
            },
            {
                region: 'center',
                title: 'centro'
            }]

        })
    }    
});