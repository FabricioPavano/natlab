Ext.define('NL.view.estadisticas.Menu',{
  extend:'Ext.panel.Panel',
  alias:'widget.menuestadisticas',

  title:'Estadisticas',
  layout:'anchor',
  items:[
  {
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Por Producto</span>',
    scale:'large',
    menu: [
        {
          xtype:'buscadorclientes',
          emptyText:'Elige un cliente',
          listeners:{
            beforerender:function(buscador){
              buscador.setWidth(Ext.getCmp('west-panel').getWidth() - 30);
            }
          }
        }
    ]
  },
  {
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Por Cliente</span>',
    scale:'large',
    handler:function(){
      Ext.MessageBox.alert('Alerta!', 'Funcionaldad no implementada');
    }
  }]
})