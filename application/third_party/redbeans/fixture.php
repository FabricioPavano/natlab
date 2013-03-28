<php

R::wipe('producto');

$producto = R::dispense('producto');
$producto->nombre = 'producto1';
$producto->precio = '23';
$producto->stock  = '44';

R::store($producto);

$producto = R::dispense('producto');
$producto->nombre = 'producto2';
$producto->precio = '33';
$producto->stock  = '677';

R::store($producto);

$producto = R::dispense('producto');
$producto->nombre = 'producto3';
$producto->precio = '456';
$producto->stock  = '56';

R::store($producto);

$producto = R::dispense('producto');
$producto->nombre = 'producto4';
$producto->precio = '22';
$producto->stock  = '77';

R::store($producto);

$producto = R::dispense('producto');
$producto->nombre = 'producto5';
$producto->precio = '66';
$producto->stock  = '21';

R::store($producto);

$producto = R::dispense('producto');
$producto->nombre = 'producto6';
$producto->precio = '63';
$producto->stock  = '165';

R::store($producto);

$producto = R::dispense('producto');
$producto->nombre = 'producto7';
$producto->precio = '42';
$producto->stock  = '11';

R::store($producto);

$producto = R::dispense('producto');
$producto->nombre = 'producto8';
$producto->precio = '59';
$producto->stock  = '39';

R::store($producto);

$producto = R::dispense('producto');
$producto->nombre = 'producto9';
$producto->precio = '38';
$producto->stock  = '58';

R::store($producto);

die();