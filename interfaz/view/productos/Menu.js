Ext.define('NL.view.productos.Menu',{
  extend:'Ext.panel.Panel',
  alias:'widget.menuproductos',

  title:'Productos',
  layout:'anchor',
  items:[{
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Listar Productos</span>',
    scale:'large',
    handler:function(){
      Ext.MessageBox.alert('Alerta!', 'Funcionaldad no implementada');
    }
  },
  {
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Nuevo Producto</span>',
    scale:'large',
    handler:function(){
      Ext.MessageBox.alert('Alerta!', 'Funcionaldad no implementada');
    }
  }]
})