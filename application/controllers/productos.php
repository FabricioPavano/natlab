<?php
class Productos extends CI_Controller {

    //Esta funcion recibe todas las peticiones a este controlador

    public function _remap($method,$params){

      //cargamos redbeans
      require('application/third_party/redbeans/rb.php');
      
      //cargamos la configuracion
      require('application/third_party/redbeans/setup.php');

      R::wipe('producto');

      $nombresProductos = array('Aflamin', 'Atlaten', 'Artritil', 'Bilaxan', 'Fungos',
      'Gastricol', 'Hedisbral', 'Flebivar', 'Regumes', 'Viadiges', 'Progresovar', 
      'Prostafilen', 'Nobetil', 'Nocotin', 'Panacea Pulmonar', 'Lisicalren');


      foreach($nombresProductos as $nombreProducto){

        $producto = R::dispense('producto');
        $producto->nombre = $nombreProducto;
        $producto->precio = rand(1,70);
        $producto->stock  = rand(1,100);

        R::store($producto);

      }

      
      //llamamos a la funcion correspondiente
      $this->$method($params);
    }


    public function buscar(){
      $productos = R::findAll('producto','ORDER BY nombre');
      Util::enviarJson($this, $productos);
    }

    public function editar($params){

      $datos = $_POST;

      $producto = R::load('producto', $datos['id']);  

      foreach($datos as $propiedad => $valor){
        $producto->$propiedad = $valor;
      }

      R::store($producto);

      $this->output->set_output('Item con id ' . $producto['id'] . 
        ' editado satisfactoriamente');
      
      
    }

    public function borrar($params){
      $id = $params[0];
      R::trash(R::load('producto', $id));
      $this->output->set_output('Item eliminado satisfactoriamente');
    }
}
?>