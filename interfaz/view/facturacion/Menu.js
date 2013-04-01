Ext.define('NL.view.facturacion.Menu',{
  extend:'Ext.panel.Panel',
  alias:'widget.menufacturacion',

  title:'Facturacion',
  layout:'anchor',
  items:[{
    xtype:'button',
    anchor:'100%',
    text:'<span class="letra-grande">Crear Factura</span>',
    scale:'large',
    target:'crear',
    handler: function() {
        window.open(SITE_URL + '/facturacion/crearFactura', '_blank');
    }
    
  }]
})