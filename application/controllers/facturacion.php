<?php
class Facturacion extends CI_Controller {

    
    public function _remap($method,$params){

      //cargamos redbeans
      require('application/third_party/redbeans/rb.php');
      
      //cargamos la configuracion
      require('application/third_party/redbeans/setup.php');

      //clase con utilidades de RedBeans
      require('application/third_party/redbeans/UtilRb.php');    

      //cargamos fpdf
      require('application/third_party/fpdf/fpdf.php');

      //decodificamos los datos
      $datos = json_decode($this->input->post('datos'));

      //hacemos algunos calculos
      $this->calcularMontos($datos);

      //llamamos a la funcion correspondiente
      $this->$method($datos);
    }

    public function crearFactura($datos)
    {
      
      //guardamos los datos de la venta en la B.D
      $this->guardarVenta($datos);

      //generamos el reporte
      $pdf = Reportes::generarFactura($datos);

      //Terminacion
      $pdf->Output();

    }

    public function crearPresupuesto($datos){

      //guardamos los datos de la venta en la B.D
      $id = $this->guardarVenta($datos);

      $datos->numero_presupuesto = $id;

      //generamos el reporte
      $pdf = Reportes::generarPresupuesto($datos);

      //Terminacion
      $pdf->Output();      

    }

    public function crearVenta(){

      print_r('Funcionalidad no implementada') and die();

    }

    private function guardarVenta($datos){

    

      $this->descontarStock($datos->productos);


      //cargamos el cliente
      $cliente = R::load('cliente',$datos->cliente->id);

      //creamos la venta
      $venta = R::dispense('venta');

      $venta->cliente     = $cliente;
      $venta->fecha       = date('Y-m-d');
      $venta->monto_total = $datos->montoTotal;
      $venta->contado     = $datos->contado;     
      $venta->descuento   = $datos->descuento_monto;
      $venta->credito     = $datos->credito_dias;
      $venta->iva         = $datos->iva;


      //creamos los detalles de la venta
      
      foreach ($datos->productos as $producto) {

          //creamos el objeto
          $detalleVenta = R::dispense('detalle');
          $detalleVenta->producto = R::load('producto', $producto->producto_id);
          $detalleVenta->cantidad = $producto->cantidad;
          $detalleVenta->precio   = $producto->precio;
          $detalleVenta->subtotal = $producto->subtotal;

          //lo anexamos a la venta
          $venta->ownDetalle[] = $detalleVenta;
      }  


      R::store($venta);

      return $venta->id;



    }

    //descuenta el stock de la venta
    private function descontarStock($productos){

      foreach ($productos as $producto) {
        $objProd = R::load('producto', $producto->producto_id);
        $objProd->stock = $objProd->stock - $producto->cantidad;
        R::store($objProd);
      }

    }

    //agregamos los montos totales, iva, subtotales etc. al objeto de datos
    //luego se usa para los reportes y para la B.D  
    private function calcularMontos(&$datos){

      $montoSubTotal = 0;
      
      foreach($datos->productos as $producto){
        $montoSubTotal = $montoSubTotal + $producto->subtotal;        
      }

      $datos->montoSubTotal = $montoSubTotal;

      $subTotalConDescuento = $montoSubTotal - $datos->descuento_monto; 

      $iva =  $subTotalConDescuento / 100 * $datos->iva_porcentaje;
      
      $datos->iva = number_format($iva, 2);
      
      $datos->montoTotal = number_format($subTotalConDescuento + $iva, 2);

    }


}
?>

