Ext.define('NL.view.facturacion.DetalleFactura',{
  extend:'Ext.grid.Panel',
  store: 'DetallesFacturas',
  alias:'widget.griddetallefactura',
  height:200,
  viewConfig: {
    markDirty: false  
  },
  features: [{
    ftype: 'summary'
  }],
  columns: [
          { 
            dataIndex:'id',
            hidden:true
          },
          { 
            text:'Cant.',
            dataIndex:'cantidad',
            flex:0.3
          },
          { 
            text:'Producto',
            dataIndex:'producto_nombre',
            flex:1
          },
          { 
            text:'P.U',
            dataIndex:'precio',
            flex:0.3,
            xtype:'numbercolumn',
            format: '0.00 Bs.'
          },
          {
            text:'Subtotal',
            dataIndex:'subtotal',
            flex:0.5,
            xtype:'numbercolumn',
            format: '0.00 Bs.',
            summaryType: 'sum',
            dock:'bottom',
            summaryRenderer: function(value, summaryData, dataIndex) {
                
                if(value == '0'){
                  return ''
                }
                else
                  return '<strong>Total:</strong>&nbsp&nbsp&nbsp ' +
                   value + '  Bs.'; 
            }
          },
          {
            xtype:'actioncolumn',
            width:70,
            items: [
              {
                  icon: url_icono_borrar,
                  tooltip: 'Borrar',
                  handler: function(grid, rowIndex, colIndex) {
                    var record         = grid.getStore().getAt(rowIndex);    
                    grid.getStore().removeAt(rowIndex)
                  }
              }
            ]
          }
      ]  
})