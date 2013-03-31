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