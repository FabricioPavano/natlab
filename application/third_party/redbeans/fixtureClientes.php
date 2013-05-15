R::wipe('cliente');

$productos = array(
  array('nombre'=>''         ,
        'domicilio'=>'' ,
        'telefono'=>'26' ,
        ''=>'0'),

$i = 0;

foreach($arrayNombres as $nombreCliente){



  $cliente = R::dispense('cliente');
  $cliente->nombre = $nombreCliente;
  $cliente->domicilio = $arrayDomicilios[$i];
  $cliente->ciudad    = $arrayCiudades[rand(0,3)];
  $cliente->estado    = $arrayEstados[rand(0,2)];
  $cliente->telefono  = rand(5000000,5999999);
  $cliente->rif       = rand(1111,9999);
  $cliente->minorista = rand(0,1);


  R::store($cliente);

  $i++;

}