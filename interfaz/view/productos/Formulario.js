Ext.define('NL.view.productos.Formulario', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularioproductos',
    title: 'Formulario de productos',
    store: Ext.StoreManager.lookup('productos'),
    layout: 'fit',
    autoShow:true,
    edicion:false,
    headerPosition:'left',
    plain:true,
    edicion:false,


    initComponent: function() {
        
        if(this.edicion == false)
            this.title = 'Nuevo Producto'
        else
            this.title = 'Editar Producto'

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
                    },{
                        xtype: 'numberfield',
                        name : 'precio_mayorista',
                        fieldLabel: 'Precio Mayorista',
                        allowBlank:false
                    },{
                        xtype: 'numberfield',
                        name : 'precio_comercial',
                        fieldLabel: 'Precio Comercial',
                        allowBlank:false
                    },{
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
                action: 'cancelar'
            }
        ];

        this.callParent(arguments);
    }
});