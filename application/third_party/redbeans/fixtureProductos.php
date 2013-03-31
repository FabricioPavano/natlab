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
