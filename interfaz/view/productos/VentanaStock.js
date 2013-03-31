Ext.define('NL.view.productos.VentanaStock', {
    extend: 'Ext.window.Window',
    alias: 'widget.ventanastock',
    layout: 'fit',
    autoShow:true,
    

    initComponent: function() {

        this.title = 'Aumentar Stock de ' + this.record.get('nombre');

        this.items = [{
            xtype:'form',
            defaults: {
                padding: '10 20 10 20'
            },
            items: [
            {
                xtype:'hiddenfield',
                name:'id'
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Stock',
                name: 'stock',
                step: 4,
                allowBlank: true
            }]
        }]    
    
        this.buttons = [
            {
                text: 'Guardar',
                action: 'guardar'
            },
            {
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent();


    }
});