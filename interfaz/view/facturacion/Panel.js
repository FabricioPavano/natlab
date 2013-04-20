Ext.define('NL.view.facturacion.Panel',{
  extend:'Ext.form.Panel',
  id:'formFacturacion',
  alias:'widget.panelfacturacion',
  defaults: {
      margin: '20 40 20 40',
      padding: '20 15 20 20',
      anchor:'100%'
  }, 
  title:'Armado de Facturas',

  items:[{
    xtype:'fieldset',
    title: '<strong>Cliente</strong>',
    layout: 'anchor',
    anchor:'80%',
    items:[{
      xtype:'buscadorclientes',
      anchor: '75%'
    }]
  },{
    xtype:'fieldset',
    title: '<strong>Productos</strong>',
    layout: {
      type:'vbox',
      align:'stretch'
    },
    anchor:'100%',
    items:[ {
              xtype:'panel',
              flex:0.3,
              border:false,
              layout:'column',
              items:[
                  {
                    xtype:'buscadorproductos',
                    columnWidth: 0.6
                  },{
                    xtype:'numberfield',
                    allowDecimals:false,
                    hideTrigger:true,
                    fieldLabel:'Cantidad',
                    name:'cantidad',
                    columnWidth: 0.4,
                    margin: '0 0 0 10',
                    labelWidth: 70
                  }
              ]    
            },{
              xtype:'griddetallefactura',
              flex:0.7,
              margin:'20 0 0 0'
            }
          ]
  },{
    xtype:'fieldset',
    title: '<strong>Otros Datos</strong>',
    layout: 'anchor',
    anchor:'100%',
    items:[
      {
        xtype:'panel',
        margin: '5 0 0 0',
        border:false,
        layout:'column',
        items:[
        {
          xtype:'checkboxfield',
          boxLabel:'<strong>Agregar IVA</strong>',
          name:'iva',
          columnWidth:0.2
        },{
          xtype:'numberfield',
          fieldLabel:'%',
          hideTrigger:true,
          minValue: 1,
          maxValue: 100,
          labelAlign: 'right',
          width:'200',
          labelWidth: 50,
          name:'iva_porcentaje',
          columnWidth: 0.2,
          disabled:true
        },
        {
          margin: '0 0 0 30',
          xtype:'checkboxfield',
          boxLabel:'<strong>Contado</strong>',
          name:'contado',
          columnWidth:0.5
        }
        ]    
      }
      ,
      {
        xtype:'panel',
        margin: '5 0 0 0',
        border:false,
        layout:'column',
        items:[
            {
              xtype:'checkboxfield',
              boxLabel:'<strong>Credito</strong>',
              name:'credito',
              columnWidth:0.2
            },{
              xtype:'textfield',
              fieldLabel:'Dias',
              labelAlign: 'right',
              labelWidth: 50,
              width:'200',
              name:'credito_dias',
              columnWidth: 0.2,
              disabled:true
            }
        ]    
      },{
        xtype:'panel',
        border:false,
        layout:'column',
        margin: '5 0 0 0',
        items:[
            {
              xtype:'checkboxfield',
              boxLabel:'<strong>Descuento</strong>',
              name:'descuento',
              columnWidth:0.2
            },{
              xtype:'textfield',
              fieldLabel:'Bs.',
              labelAlign: 'right',
              labelWidth: 50,
              width:'200',
              name:'descuento_monto',
              columnWidth: 0.2,
              disabled:true
            }
        ]    
      }
      ]
  }],
  initComponent:function(){
    this.buttons = [
        {
            text: 'Facturar',
            target: 'facturar'
        },
        {
            text: 'Cancelar',
            target: 'cancelar'
        }
    ];

    this.callParent(arguments);
  }

})