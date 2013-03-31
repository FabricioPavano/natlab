
//Harcodeamos algunas urls
var url_icono_editar        = 'interfaz/view/icons/editar.png';
var url_icono_borrar        = 'interfaz/view/icons/borrar.png';
var url_icono_flecha_arriba = 'interfaz/view/icons/flecha_arriba.png';
var url_icono_flecha_abajo  = 'interfaz/view/icons/flecha_abajo.png';
var url_icono_stock         = 'interfaz/view/icons/stock.png';


//Importante, creamos la constante con la url del sitio
//hasta encontrar una mejor solucion
//en caso de cambiar de host, hay que modificar esta constante
var SITE_URL = '/natlab/index.php';

Ext.application({
    requires: ['Ext.container.Monitor',
               'Ext.container.Viewport',
               'Ext.window.MessageBox',
               'Ext.layout.container.Border',
               'Ext.layout.container.Accordion',
               'Ext.layout.container.Card',
               'Ext.grid.column.Number',
               'Ext.grid.column.Action',
               'Ext.form.Panel',
               'Ext.form.FieldAncestor',
               'Ext.form.field.Hidden',
               'Ext.ux.grid.FiltersFeature'],

    name: 'NL',
    appFolder: 'interfaz',

    controllers: ['Principal', 'Productos','Clientes','Facturacion','Estadisticas'],
    
    launch: function() {
        

        //Traducimos los botones de las ventanas
        Ext.MessageBox.buttonText.yes = "Si";
        Ext.MessageBox.buttonText.no = "No"; 
        
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
                id:'regionCentral',
                items:[
                {
                    xtype:'listaproductos'
                },
                {
                    xtype:'listaclientes'
                }]
            }]

        })


        // Ext.create('Ext.window.Window', {
        //     title: 'Hello',
        //     height: 200,
        //     width: 400,
        //     layout: 'fit',
        //     items: {  // Let's put an empty grid in just to illustrate fit layout
        //         xtype: 'form',
                
        //     }
        // }).show();

    }    
});



