<?php
class Productos extends CI_Controller {

    //Esta funcion recibe todas las peticiones a este controlador

    public function _remap($method,$params){
      
      //cargamos redbeans
      require('application/third_party/redbeans/rb.php');
      
      //cargamos la configuracion
      require('application/third_party/redbeans/setup.php');
      
      //llamamos a la funcion correspondiente
      $this->$method($params);
    }



    public function buscar()
    {
      $productos = R::findAll('producto','ORDER BY nombre');
      Util::enviarJson($this, $productos);
    }
}
?>