Ext.define('NL.controller.Productos', {

    extend: 'Ext.app.Controller',

    stores: ['Productos'],
    
    views:['productos.Menu',
           'productos.Lista'],

    init: function() {
        
    },
});