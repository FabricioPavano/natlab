Ext.define('NL.view.facturacion.VentanaImpresion',{
  extend:'Ext.window.Window',
  alias:'widget.ventanaimpresion',
  title:'Tipo de Impresion',
  width:300,
  height:200,
  items:[
  {
    xtype:'form',
    items:[{
        margin:'20',
        xtype: 'radiogroup',
        fieldLabel:'Tipo de Impresion',
        columns:1,
        items: [
            {
             boxLabel: 'Factura'    ,
             name: 'factura',
             //tengo que agregar estos listener porque ext no se comporta 
             //como debieria
             listeners:{
               change:function(btn, value){
                
                 if(value == true){
                  btn.next().setValue(false);
                  btn.next().next().setValue(false);
                 }

               }
             }
            },
            {boxLabel: 'Presupuesto',
             name: 'presupuesto',
             listeners:{
               change:function(btn, value){
                 if(value == true){
                   btn.prev().setValue(false);
                   btn.next().setValue(false);
                 }
               }
             }
            },
            {boxLabel: 'Ninguno',
             name: 'ninguno',
             listeners:{
               change:function(btn, value){
                 if(value == true){
                   btn.prev().setValue(false);
                   btn.prev().prev().setValue(false);
                 }
               }
             }
            }
        ]
    }
    ]
  }],

  
  buttons:[
        {
            text: 'Aceptar',
            target: 'aceptar'
            
        },
        {
            text: 'Cancelar',
            target: 'cancelar',
            scope:this,
            handler:function(btn){
              btn.up('window').destroy();
            }
        }
  ]
  })