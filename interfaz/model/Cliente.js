Ext.define('NL.model.Cliente', {
    extend: 'Ext.data.Model',
    fields: [
    {name:'id'       },
    {name:'nombre'   },
    {name:'domicilio'},
    {name:'ciudad'   },
    {name:'telefono',  type:'int'},
    {name:'rif'     ,  type:'int'}]
});

