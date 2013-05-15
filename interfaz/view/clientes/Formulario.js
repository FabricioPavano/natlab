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
        

        var formClientes = Ext.create('Ext.form.Panel',{
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
                        xtype:'textfield',
                        name:'telefono',
                        fieldLabel:'Telefono',
                        allowBlank:true
                    },
                    {
                        xtype:'textfield',
                        name:'rif',
                        fieldLabel:'Rif',
                        allowBlank:true
                    },{
                        xtype: 'radiogroup',
                        name: 'tipo_cliente',
                        fieldLabel: 'Tipo Cliente',
                        cls: 'x-check-group-alt',
                        columns:1,
                        allowBlank:false,
                        items: [
                            {boxLabel: 'Minorista', name: 'minorista', inputValue: 1},
                            {boxLabel: 'Mayorista', name: 'minorista', inputValue: 0}
                        ]
                    }
                ]
            })    


        this.items = [ formClientes ];

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


         if(this.edicion == false)
            this.title = 'Nuevo Cliente'
         else {
            this.title = 'Editar Cliente ' + this.record.get('nombre');
            
            console.log(this.record)

            formClientes.getForm().findField('tipo_cliente')
               .setValue({minorista:this.record.get('minorista')})
         
         }

        this.callParent(arguments);
    }
});