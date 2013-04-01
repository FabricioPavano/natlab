Ext.define('NL.view.clientes.Menu',{
  extend:'Ext.panel.Panel',
  alias:'widget.menuclientes',

  title:'Clientes',
  layout:'anchor',
  items:[{
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Listar Clientes</span>',
    scale:'large',
    target:'listar'
  },
  {
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Nuevo Cliente</span>',
    scale:'large',
    target:'crear'
  }]
})