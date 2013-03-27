Ext.define('NL.view.clientes.MenuClientes',{
  extend:'Ext.panel.Panel',
  alias:'widget.menuclientes',

  title:'Clientes',
  layout:'anchor',
  items:[{
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Listar Clientes</span>',
    scale:'large',
    handler:function(){
      Ext.MessageBox.alert('Alerta!', 'Funcionaldad no implementada');
    }
  },
  {
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Nuevo Cliente</span>',
    scale:'large',
    handler:function(){
      Ext.MessageBox.alert('Alerta!', 'Funcionaldad no implementada');
    }
  }]
})