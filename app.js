Ext.application({
    requires: ['Ext.container.Viewport'],

    name: 'NL',
    appFolder: 'app',

    controllers: [
        'Productos'
    ],
    
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                
            }
        });
    }
});