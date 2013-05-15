

//Harcodeamos algunas urls
var url_icono_editar        = 'interfaz/view/icons/editar.png';
var url_icono_borrar        = 'interfaz/view/icons/borrar.png';
var url_icono_flecha_arriba = 'interfaz/view/icons/flecha_arriba.png';
var url_icono_flecha_abajo  = 'interfaz/view/icons/flecha_abajo.png';
var url_icono_stock         = 'interfaz/view/icons/stock.png';


Ext.application({
    requires: ['Ext.*',
               'Ext.container.Viewport',
               'Ext.window.MessageBox',
               'Ext.layout.container.Accordion',
               'Ext.layout.container.Border',
               'Ext.layout.container.Card',
               'Ext.layout.container.Column',
               'Ext.grid.column.Number',
               'Ext.grid.column.Action',
               'Ext.ux.grid.FiltersFeature',
               'Ext.form.*',
               'Ext.fx.target.Element'],

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
                id:'west-panel',    
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
                },
                {
                    xtype:'panelfacturacion'
                }
                ]
            }]

        })


    }    
});



