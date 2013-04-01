Ext.define('NL.view.facturacion.Panel',{
  extend:'Ext.form.Panel',
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
                    xtype:'textfield',
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
    layout: 'anchor'
  }
  ]
})