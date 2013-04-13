<?php
class Productos extends CI_Controller {

    //Esta funcion recibe todas las peticiones a este controlador

    public function _remap($method,$params){

      //cargamos redbeans
      require('application/third_party/redbeans/rb.php');
      
      //cargamos la configuracion
      require('application/third_party/redbeans/setup.php');

      //clase con utilidades de RedBeans
      require('application/third_party/redbeans/UtilRb.php');    
      
      

      //llamamos a la funcion correspondiente
      $this->$method($params);
    }


    public function buscar(){
      $productos = R::findAll('producto','ORDER BY nombre');
      Util::enviarJson($this, $productos);
    }

    public function editar($params){

      $datos = $_POST;

      $registro = UtilRb::editarRegistro('producto', $datos);

      $this->output->set_output('Item con id ' . $registro['id'] . 
        ' editado satisfactoriamente');
      
    }

    public function borrar($params){
      $id = $params[0];
      R::trash(R::load('producto', $id));
      $this->output->set_output('Item eliminado satisfactoriamente');
    }
}
?>