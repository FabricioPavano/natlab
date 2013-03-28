<?php

class Util{

  /*
  * Funcion que toma un bean o conjunto de beans
  * Lo convierte en array, luego en Json y lo envia al cliente
  * A travez de la clase Output 
  */
  public static function enviarJson($controller, $records){

    $controller->output
        ->set_content_type('application/json')
        ->set_output(json_encode(R::exportAll($records)));


  }
  
}