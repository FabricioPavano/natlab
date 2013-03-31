Ext.define('NL.view.productos.Formulario', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularioproductos',
    title: 'Formulario de productos',
    store: Ext.StoreManager.lookup('productos'),
    layout: 'fit',
    autoShow:true,
    edicion:false,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                defaults: {
                    padding: '10 20 10 20'
                }, 
                items: [
                    {
                        xtype:'hiddenfield',
                        name:'id'
                    },{
                        xtype: 'textfield',
                        name : 'nombre',
                        fieldLabel: 'Nombre',
                        allowBlank:false
                    },
                    {
                        xtype: 'numberfield',
                        name : 'precio',
                        fieldLabel: 'Precio',
                        allowBlank:false
                    },
                    {
                        xtype: 'numberfield',
                        name : 'stock',
                        fieldLabel: 'Stock',
                        hidden: this.edicion,
                        value:0,
                        allowBlank:false  
                    }
                ]
            }
        ];

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

        this.callParent(arguments);
    }
});