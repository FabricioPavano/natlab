Ext.application({
    requires: ['Ext.container.Viewport'],

    name: 'NL',
    appFolder: 'app',

    controllers: ['Principal'],
    
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
                    title:'Productos',
                    layout:'anchor',
                    items:[{
                        xtype:'button',
                        anchor:'100%',
                        text:'<span class="letra-grande">Listar Productos</span>',
                        scale:'large'
                    }]
                },
                {
                    title:'Clientes'
                },
                {
                    title:'Facturacion'
                },
                {
                    title:'Estadisticas'
                }]
            },
            {
                region: 'center',
                title: 'centro'
            }]

        })
    }    
});