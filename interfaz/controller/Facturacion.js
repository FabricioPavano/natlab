Ext.define('NL.controller.Facturacion', {

    extend: 'Ext.app.Controller',
    
    models: ['DetalleFactura'],

    stores: ['DetallesFacturas'],

    views:['facturacion.Menu',
           'facturacion.Panel',
           'facturacion.DetalleFactura',
           'facturacion.VentanaImpresion',
           'general.BuscadorClientes',
           'general.BuscadorProductos'],

    init: function() {
        this.control({
          'menufacturacion button[target=crear]': {
              click: this.abrirFormularioCreacionFactura
          },  
          'panelfacturacion buscadorclientes': {
              select: this.clienteSeleccionado,
              specialkey:this.moverFocoABuscadorProductos
          },
          'panelfacturacion buscadorproductos': {
              select: this.clienteSeleccionado,
              specialkey:this.moverFocoATextfieldCantidad
          },    
          'panelfacturacion textfield[name=cantidad]': {
              specialkey: this.agregarDetalle
          },
          'panelfacturacion checkboxfield[name=credito]': {
              change: this.manejoTextfieldCredito
          },
          'panelfacturacion checkboxfield[name=descuento]': {
              change: this.manejoTextfieldDescuento
          },
          'panelfacturacion button[target=facturar]': {
              click: function(){
                var win = Ext.widget('ventanaimpresion');
                win.show();
              }
          },
          'panelfacturacion button[target=cancelar]': {
              click: this.borrarDatosFacturacion 
          },
          
          'ventanaimpresion button[target=aceptar]': {
              click: this.facturar
          }
        })
    },


    abrirFormularioCreacionFactura: function(button){
      Ext.getCmp('regionCentral').getLayout().setActiveItem('panelfacturacion')        
    },

    clienteSeleccionado: function(combo, record){
      //dejo esta funcion por si la necesito utilizar en el futuro
      // var input = Ext.ComponentQuery.query('panelfacturacion buscadorproductos')[0];
      //combo.blur()
      //input.focus()
    },

    productoSeleccionado: function(){
      //dejo esta funcion por si la necesito utilizar en el futuro
    },

    moverFocoABuscadorProductos: function(combo, e){
      
      //tomamos una referencia al destino
     
      if(e.getKey() == e.ENTER){

        var combo_productos = 
          Ext.ComponentQuery.query('panelfacturacion buscadorproductos')[0];  

        e.preventDefault();
        combo_productos.focus()
      } 

    },

    moverFocoATextfieldCantidad:function(combo, e){

      if(e.getKey() == e.ENTER){
        
        //Tomamos una referencia del destino
        var textfield_cantidad = combo.next();

        e.preventDefault();
        textfield_cantidad.focus()
      }
      
    },

    //agrega un registro al grid de detalles de factura
    //y luego deja el foco nuevamente en el combo de productos
    agregarDetalle: function(numberfield, e){
       
      var keycode = e.getKey();

      //Solo continuamos en caso de que se haya
      //hecho blur con ENTER o TAB
      if(keycode != e.TAB && keycode != e.ENTER)
        return
    

      //preparamos las variables que vamos a necesitar
      //para calcular del detalle

      var grid = Ext.ComponentQuery.query('panelfacturacion griddetallefactura')[0]


      var detalleFactura = Ext.create('NL.model.DetalleFactura');

      var storeDetalleFactura = grid.getStore();
      var storeClientes       = Ext.StoreManager.lookup('Clientes');
      var storeProductos      = Ext.StoreManager.lookup('Productos');
      


      var storeDetalleFactura = Ext.StoreManager.lookup('DetallesFacturas')

      var comboClientes = 
        Ext.ComponentQuery.query('panelfacturacion buscadorclientes')[0];
      var comboProductos = 
        Ext.ComponentQuery.query('panelfacturacion buscadorproductos')[0];
      
  
      var cliente_id  = comboClientes.getValue();
      var producto_id = comboProductos.getValue();


      //validamos que se haya ingresado un cliente
      if(cliente_id == null){
        Ext.Msg.show({
             title:'Advertencia',
             msg: 'Debe ingresar un nombre de cliente valido',
             buttons: Ext.Msg.OK,
             icon: Ext.Msg.WARNING
        });

        numberfield.setValue('');

        return
      }

      //validamos que se haya ingresado un producto
      if(producto_id == null){
        Ext.Msg.show({
             title:'Advertencia',
             msg: 'Debe ingresar un nombre de producto valido',
             buttons: Ext.Msg.OK,
             icon: Ext.Msg.WARNING
        });

        return
      }

      //validamos que se haya ingresado una cantidad
      if(numberfield.getValue() == null){
        Ext.Msg.show({
             title:'Advertencia',
             msg: 'Debe ingresar la cantidad',
             buttons: Ext.Msg.OK,
             icon: Ext.Msg.WARNING
        });

        return
      }

      //validamos que no se repita el producto
      if(storeDetalleFactura.getById(producto_id) != null){
        Ext.Msg.show({
             title:'Advertencia',
             msg: 'Ese producto ya se ha ingresado a la factura',
             buttons: Ext.Msg.OK,
             icon: Ext.Msg.WARNING
        });

        return
      }



      var cliente  = storeClientes.getById(cliente_id); 
      var producto = storeProductos.getById(producto_id); 


      //Seteamos los datos del detalle de la factura

      detalleFactura.set('producto_id', producto_id); 
      detalleFactura.set('producto_nombre', producto.get('nombre'));
      detalleFactura.set('cantidad', numberfield.getValue());

      //Seteamos el precio de acuerdo a si el cliente es
      //Minorista o Mayorista

      if(cliente.get('minorista') == '1'){
        detalleFactura.set('precio', producto.get('precio_comercial'));
      }

      if(cliente.get('minorista') == '0'){
        detalleFactura.set('precio', producto.get('precio_mayorista'));
      }

      //calculamos el subtotal del registro de la factura

      var subtotal = detalleFactura.get('cantidad') * detalleFactura.get('precio');

      detalleFactura.set('subtotal', subtotal);

      //agregamos el registro al grid

      storeDetalleFactura.add(detalleFactura);

      //Preparamos la interfaz para ingresar un nuevo detalleFactura

      numberfield.setValue('');
      numberfield.blur('');

      comboProductos.reset();
      comboProductos.focus();

    },

    manejoTextfieldCredito: function(checkbox){
      var textfield = checkbox.next();

      if(checkbox.getValue()){
        textfield.enable();
        textfield.focus();  
      }
      else{
        textfield.reset();
        textfield.disable();
      }

    },

    manejoTextfieldDescuento: function(checkbox){
      var textfield = checkbox.next();

      if(checkbox.getValue()){
        textfield.enable();
        textfield.focus();  
      }
      else{
        textfield.reset();
        textfield.disable();
      }
        

    },

    reunirDatosFacturacion: function(form){
      
      
      var storeProductos = form.down('grid').getStore();

      //Validamos los datos primero
      
      if(!this.validarDatosFacturacion(form)){
        return  
      };

      var datos = {};

      //Caputramos el id del cliente

      datos.cliente = {};

      var comboClientes = 
        Ext.ComponentQuery.query('panelfacturacion buscadorclientes')[0];

      var cliente_id  = comboClientes.getValue();

      datos.cliente.id = cliente_id;


      //Capturamos los datos del grid con los productos

      datos.productos = [];
      var productos = storeProductos.getRange(); 

      datos.productos = productos.map(function(producto, index, arr){
        return producto.getData();
      });

      //Capturamos el resto de los datos
      //Es al contado?
      if(form.getForm().findField('contado').getValue()){
        datos.contado = '1';
      }
      else{
        datos.contado = '0';
      }


      //Tiene dias de credito?
      if(!form.getForm().findField('credito_dias').isDisabled()){
        var dias_credito = form.getForm().findField('credito_dias').getValue();
        datos.credito = '1';
        datos.credito_dias = dias_credito;
      }
      else{
        datos.credito_dias =  '0';
        datos.credito = '0';
      }

      //Tiene un monto de descuento?
      if(!form.getForm().findField('descuento_monto').isDisabled()){
        var descuento_monto = form.getForm().findField('descuento_monto').getValue();
        datos.descuento = '1';
        datos.descuento_monto = descuento_monto
      }
      else{
        datos.descuento_monto = '0';
        datos.descuento = '0';
      }

      return datos;

    },

    borrarDatosFacturacion: function(button){
      
      //borramos los campos
      var form = button.up('form');
      form.getForm().reset();  
      
      //vaciamos el grid
      grid = form.down('grid');
      grid.getStore().removeAll();

      //deshabilitamos los textfields que corresponden
      form.down('textfield[name=descuento_monto]').disable();
      form.down('textfield[name=credito_dias]'   ).disable();
      
    },

    //Valida y muestra los datos de error en caso de ser necesario
    validarDatosFacturacion: function(form){
      ////Validamos el cliente
      
      var comboClientes = 
        Ext.ComponentQuery.query('panelfacturacion buscadorclientes')[0];

      var cliente_id  = comboClientes.getValue();

      if(cliente_id == null){
        Ext.Msg.show({
             title:'Advertencia',
             msg: 'Debe ingresar un nombre de cliente valido',
             buttons: Ext.Msg.OK,
             icon: Ext.Msg.WARNING
        });

        return false
      }

      ////validamos que el grid tenga productos a facturar

      var grid = form.down('grid');
      var store = grid.getStore();

      if(store.getCount() == 0){
        Ext.Msg.show({
             title:'Advertencia',
             msg: 'Debe ingresar por lo menos un producto a facturar',
             buttons: Ext.Msg.OK,
             icon: Ext.Msg.WARNING
        });

        return false    
      }

      ////validamos que si el checkbox de credito esta marcado
      ////se haya ingresado la cantidad de dias

      if(!form.getForm().findField('credito_dias').isDisabled()){
        var dias_credito = form.getForm().findField('credito_dias').getValue();
        if(dias_credito == ''){
          Ext.Msg.show({
               title:'Advertencia',
               msg: 'Debe ingresar la cantidad de dias del credito',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
          });

          return false  
        }
      }

      ////validamos que si el checkbox de descuento esta marcado
      ////se haya ingresado  el monto del mismo

      if(!form.getForm().findField('descuento_monto').isDisabled()){
        var descuento_monto = form.getForm().findField('descuento_monto').getValue();
        if(descuento_monto == ''){
          Ext.Msg.show({
               title:'Advertencia',
               msg: 'Debe ingresar el monto del descuento',
               buttons: Ext.Msg.OK,
               icon: Ext.Msg.WARNING
          });

          return false  
        }
      }



      //// si ha pasado las validaciones devolvemos true
      return true

    },

    imprimirFactura:function(){

      var form = Ext.getCmp('formFacturacion');
      var datos = this.reunirDatosFacturacion(form)
      //console.log(datos)
      document.getElementById('postData').value = Ext.JSON.encode(datos);                
      document.getElementById('form_facturacion').submit();
    
    },

    facturar: function(button){

        var value = button.up('window').down('radiogroup').getChecked()[0];
        value = value.name;

        var form = Ext.getCmp('formFacturacion');
        var datos = this.reunirDatosFacturacion(form)
        
        if(value == 'factura'){
          document.getElementById('form_facturacion')
            .action = 'index.php/facturacion/crearFactura';
        }

        if(value == 'presupuesto'){
          document.getElementById('form_facturacion')
            .action = 'index.php/facturacion/crearPresupuesto';    
        }

        if(value == 'ninguno'){
          document.getElementById('form_facturacion')
            .action = 'index.php/facturacion/crearVenta';    
        }

        

        document.getElementById('postData').value = Ext.JSON.encode(datos);                

        document.getElementById('form_facturacion').submit();

        //this.borrarDatosFacturacion()

      }
});