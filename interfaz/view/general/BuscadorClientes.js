Ext.define('NL.view.general.BuscadorClientes',{
  extend      :'Ext.form.field.ComboBox',
  alias       :'widget.buscadorclientes',
  displayField:'nombre',
  valueField  :'id',
  queryMode: 'local',
  typeAhead   : true,
  forceSelection:true,
  listConfig: {
    loadingText: 'Buscando...',
    emptyText: 'No hay clientes con ese nombre...'
  },
  listeners:{
    //Este work around lo tengo que hacer porque no 
    //logro asignar directamente un store al buscador 
    afterrender:function(){
      
      var me = this;  

      //esperamos 3 segundos a que se carguen los items del store original
      setTimeout(function(){
        var arrayDatos = Ext.StoreManager.lookup('Clientes').getRange();
        
        var store = Ext.create('Ext.data.Store', {
          model: 'NL.model.Cliente',
          storeId: 'ClientesBuscador',
          data: arrayDatos
        });

        me.store = store;

      },3000);
    }
  }
})