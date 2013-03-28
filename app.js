//Importante, creamos la constante con la url del sitio
//hasta encontrar una mejor solucion
//en caso de cambiar de host, hay que modificar esta constante
var SITE_URL = '/natlab/index.php';

Ext.application({
    requires: ['Ext.container.Viewport',
               'Ext.window.MessageBox',
               'Ext.layout.container.Border',
               'Ext.layout.container.Accordion',
               'Ext.layout.container.Card',
               ''],

    name: 'NL',
    appFolder: 'interfaz',

    controllers: ['Principal', 'Productos','Clientes','Facturacion','Estadisticas'],
    
    launch: function() {
        

        
        NL.URL = 'localhost/natlab/index.php';

        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            padding: '0 150 0 150', //esto le da el efecto centrado a la aplicacion
            items: [
            {
                region:'west',
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
                layout:'card',
                items:[
                {
                    xtype:'listaproductos'
                }]
            }]

        })
    }    
});