<?php
class Clientes extends CI_Controller {

    //Esta funcion recibe todas las peticiones a este controlador

    public function _remap($method,$params){

      //cargamos redbeans
      require('application/third_party/redbeans/rb.php');
      
      //cargamos la configuracion
      require('application/third_party/redbeans/setup.php');



      R::wipe('cliente');

      $arrayNombres = array(
        'Javier Tormedo',
        'Juan Caligole',
        'Armando Maechado',
        'Julian Cobas',
        'Norberto Reyes',
        'Analia Bustos',
        'Maria Gonzalez'
      );

      $arrayDomicilios = array(
        'Bolivar 211',
        'Escobar 51',
        'Alameda 67',
        'Jorge Newrich 11',
        'Bolougne Sur Mer 67',
        'Belgrano 32',
        'Almirante 88'
      );

      $arrayCiudades = array(
        'La Grita',
        'Cucuta',
        'La Fria',
        'San Cristobal'
      );

      $i = 0;

      foreach($arrayNombres as $nombreCliente){



        $cliente = R::dispense('cliente');
        $cliente->nombre = $nombreCliente;
        $cliente->domicilio = $arrayDomicilios[$i];
        $cliente->ciudad    = $arrayCiudades[rand(0,3)];
        $cliente->telefono  = rand(5000000,5999999);
        $cliente->rif       = rand(1111,9999);

        R::store($cliente);

        $i++;

      }


      
      //llamamos a la funcion correspondiente
      $this->$method($params);
    }


    public function buscar(){
      $clientes = R::findAll('cliente','ORDER BY nombre');
      Util::enviarJson($this, $clientes);
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