Ext.define('NL.view.clientes.Formulario', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularioclientes',
    title: 'Formulario de clientes',
    store: Ext.StoreManager.lookup('clientes'),
    layout: 'fit',
    autoShow:true,
    edicion:false,
    headerPosition:'left',
    plain:true,

    initComponent: function() {
        
        if(this.edicion == false)
            this.title = 'Nuevo Cliente'
        else
            this.title = 'Editar Cliente ' + this.record.get('nombre')


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
                        xtype: 'textfield',
                        name : 'domicilio',
                        fieldLabel: 'Domicilio',
                        allowBlank:true
                    },
                    {
                        xtype: 'textfield',
                        name : 'estado',
                        fieldLabel: 'Estado',
                        allowBlank:true  
                    },
                    {
                        xtype: 'textfield',
                        name : 'ciudad',
                        fieldLabel: 'Ciudad',
                        allowBlank:true  
                    },
                    {
                        xtype:'numberfield',
                        allowDecimals:false,
                        hideTrigger:true,
                        name:'telefono',
                        fieldLabel:'Telefono',
                        allowBlank:true
                    },
                    {
                        xtype:'numberfield',
                        allowDecimals:false,
                        hideTrigger:true,
                        name:'rif',
                        fieldLabel:'Rif',
                        allowBlank:true
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