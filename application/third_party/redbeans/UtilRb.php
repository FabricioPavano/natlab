<?php

//Clase que contiene funciones utiles para RedBeans

class UtilRb{

  /*
  * Edita un registro de la base de datos 
  * param $nombreEntidad: Nombre de la tabla o modelo
  * param $datos:         Array con los nuevos datos del registro
  */
  public static function editarRegistro($nombreEntidad,$datos){

    //Cargamos el registro
    $registro = R::load($nombreEntidad, $datos['id']);  

    //Seteamos sus nuevas propiedades
    foreach($datos as $propiedad => $valor){
      $registro->$propiedad = $valor;
    }

    R::store($registro);

    return $registro;

  }  
}