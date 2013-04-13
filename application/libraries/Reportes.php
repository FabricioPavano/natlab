<?php

class Reportes{

  
  //Devuelve el objeto FPDF
  public static function generarFactura($datos){


    //cargamos los datos del cliente
    $cliente = R::load('cliente', $datos->cliente->id);

    //Seteamos algunos datos premilinares
    if($datos->contado == '1'){
      $contado = 'x';
    }
    else{
      $contado = '';
    }

    if($datos->credito == '1'){
      $credito = 'x';
      $credito_dias = $datos->credito_dias;
    }
    else{
      $credito = '';
      $credito_dias = '';
    }

    //Creamos el pdf que contiene el formato de la factura  

    //Cell (Width,Height,TExt,Border,Ln, Align)

    //La pagina tiene 297mm de alto


    $pdf = new FPDF('P','mm' );
    $pdf->setAutoPageBreak(false);

    $pdf->AddPage();


    function letraNormal($pdf){
      $pdf->SetFont('Arial','',12);
    }

    function letraMayor($pdf){
      $pdf->SetFont('Arial','B',14);
    }


    letraNormal($pdf);

    //Colocamos el cursor en la posicion de la fecha
    $pdf->setXY(48,49);  
    
    //Colocamos la fecha
    $pdf->Cell(10,5 ,date('d'), 0 , 0, 'C');
    $pdf->Cell(11,5 ,date('m'), 0 , 0, 'C');
    $pdf->Cell(15,5 ,date('Y'), 0 , 0, 'C');


    letraMayor($pdf);

    //Colocamos la razon social
    $pdf->setXY(30, $pdf->getY() + 7);
    $pdf->Cell(120, 7.2 ,$cliente->nombre, 0 , 2 /* Indica que la proxima vaya abajo */, 'C');

    //Colocamos el domicilio
    $pdf->Cell(120, 7.2 ,$cliente->domicilio, 0 , 0, 'C');      

    //Coolocamos el Telefono
    $pdf->setXY(120, $pdf->getY() + 7.2);
    $pdf->Cell(38, 7.2 ,$cliente->telefono, 0 , 0, 'C');

    //Colocamos la Ciudad
    $pdf->setXY(23, $pdf->getY() + 7.2);
    $pdf->Cell(70, 7.2 ,$cliente->ciudad, 0 , 0, 'C');      

    //Colocamos el Estado
    $pdf->setX(100);
    $pdf->Cell(60, 7.2, $cliente->estado, 0, 2, 'C');

    //Colocamos el Rif
    $pdf->setX(32);
    $pdf->Cell(60, 7.2, $cliente->rif, 0, 0, 'C');

    //Contado?
    $pdf->setXY(117,$pdf->getY() + 1);
    $pdf->Cell(5, 5, $contado, 0, 0, 'C');   

    //Credito?
    $pdf->setX($pdf->getX() + 11);
    $pdf->Cell(5, 5, $credito , 0, 0, 'C');         

    //Dias de Credito

    $pdf->setX($pdf->getX() + 10);
    $pdf->Cell(5, 5, $credito_dias, 0, 0, 'C');         


    letraNormal($pdf);

    //Productos

    //print_r($datos->productos) and die();
    
    $producto = $datos->productos[0]; 

    $pdf->setXY(5,98);

    //en la fila 24 va el sub-total
    //en la fila 25 va el descuento
    //en la fila 26 va el total

    foreach ($datos->productos as $producto) {

      $pdf->Cell(10,7.4,$producto->cantidad,0, 0 ,'C');
      $pdf->Cell(97,7.4,$producto->producto_nombre,0,0,'C');
      
      $pdf->setX(112);        
      $pdf->Cell(23,7.4,$producto->precio,0,0,'C');
      $marcadorX = $pdf->getX();
      $pdf->Cell(27,7.4,$producto->subtotal,0,2,'C');

      $pdf->setX(5);

    }

    //Colocamos los totales
    $pdf->setXY($marcadorX, 267.5);

    $pdf->Cell(27,7.4, $datos->montoSubTotal ,0,2,'C');
    $pdf->Cell(27,7.4, $datos->descuento_monto ,0,2,'C');
    $pdf->Cell(27,7.4, $datos->montoTotal ,0,2,'C');

    return $pdf;
    
  }



  public static function generarPresupuesto($datos){


    //cargamos los datos del cliente
    $cliente = R::load('cliente', $datos->cliente->id);

    //Seteamos algunos datos premilinares
    if($datos->contado == '1'){
      $contado = 'x';
    }
    else{
      $contado = '';
    }

    if($datos->credito == '1'){
      $credito = 'x';
      $credito_dias = $datos->credito_dias;
    }
    else{
      $credito = '';
      $credito_dias = '';
    }

    //Creamos el pdf que contiene el formato del presupuesto  

    //Cell (Width,Height,TExt,Border,Ln, Align)

    //La pagina tiene 297mm de alto

    $pdf = new FPDF('P','mm' );
    $pdf->setAutoPageBreak(false);

    $pdf->AddPage();


    function letraNormal($pdf){
      $pdf->SetFont('Arial','',12);
    }

    function letraMayor($pdf){
      $pdf->SetFont('Arial','B',14);
    }


    letraNormal($pdf);

    $pdf->setXY(10,20);   
    

    //Colocamos la fecha
    $pdf->Cell(15,7 ,'Fecha', 0 , 0, 'C');
    $pdf->Cell(10,7 ,date('d'), 1 , 0, 'C');
    $pdf->Cell(11,7 ,date('m'), 1 , 0, 'C');
    $pdf->Cell(15,7 ,date('Y'), 1 , 0, 'C');


    //Numero de Presupuesto
    $pdf->setX($pdf->getX() + 10);

    letraMayor($pdf);
    $pdf->Cell(50,7 , 'Presupuesto Nro:', 0 , 0, 'C');    
    $pdf->Cell(28,7 , $datos->numero_presupuesto , 1 , 2, 'C');

    //Nombre o Razon Social


    $pdf->setXY(10,$pdf->getY() + 3);
    $pdf->Cell(30,7 , 'Nombre:', 'LTB' , 0, 'C');    
    $pdf->Cell(110,7 , $cliente->nombre, 'RTB' , 1, 'C');    


    //Direccion

    $pdf->setX(40);
    
    $principio = $pdf->getY();
    $pdf->MultiCell(110,7 , $cliente->domicilio, 'RTB' , 'C');    
    $final = $pdf->getY();
    
    //calculamos el alto de la celda anterior para asignarselo a la direccion
    $altoCelda = $final - $principio;

    $pdf->setXY(10,$pdf->getY() - $altoCelda);
    $pdf->Cell(30,$altoCelda , 'Direccion:', 'LTB' , 2, 'C');    

    //Ciudad

    $pdf->setX(10);
    $pdf->Cell(30,7 , 'Ciudad:', 'LTB' , 0, 'C');    
    $pdf->Cell(40,7 , $cliente->ciudad, 'RTB' , 0, 'C');    

    //Estado

    $pdf->Cell(30,7 , 'Estado:', 'LTB' , 0, 'C');    
    $pdf->Cell(40,7 , $cliente->estado, 'RTB' , 2, 'C');    

    //Contado?

    $pdf->setXY(10,$pdf->getY() + 3);
    $pdf->Cell(30,7 , 'Contado:', 0 , 0, 'C');    
    $pdf->Cell(5 ,7 , $contado , 1 , 0, 'C');    


    //Credito?

    $pdf->setX($pdf->getX() + 10);
    $pdf->Cell(30,7 , 'Credito:', 0 , 0, 'C');    
    $pdf->Cell(5 ,7 , $credito , 1 , $credito?0:1, 'C');    

    //Dias de credito

    if($credito == 'x'){
      $pdf->setX($pdf->getX() + 3);
      $pdf->Cell(5,7 , $credito_dias, 0 , 0, 'C');
      $pdf->Cell(15,7 , 'dias', 0 , 1, 'C');

    }


    // Productos

    // Cabecera Tabla

    $pdf->setXY(10,$pdf->getY() + 3);
    $pdf->Cell(20,7 , 'Unid:', 1 , 0, 'C');    
    $pdf->Cell(60,7 , 'Descripcion', 1 , 0, 'C');        
    $pdf->Cell(30,7 , 'P.U', 1 , 0, 'C');        
    $pdf->Cell(30,7 , 'P Tot.', 1 , 1, 'C');        

    $cantProductos = count($datos->productos);

    foreach ($datos->productos as $producto) {

      $pdf->Cell(20,7 , $producto->cantidad, 1 , 0, 'C');    
      $pdf->Cell(60,7 , $producto->producto_nombre, 1 , 0, 'C');        
      $pdf->Cell(30,7 , $producto->precio, 1 , 0, 'C');        
      $pdf->Cell(30,7 , $producto->subtotal, 1 , 1, 'C');        
    }

    for($i=1;$i<23-$cantProductos;$i++){

      $pdf->Cell(20,7 , '', 1 , 0, 'C');    
      $pdf->Cell(60,7 , '', 1 , 0, 'C');        
      $pdf->Cell(30,7 , '', 1 , 0, 'C');        
      $pdf->Cell(30,7 , '', 1 , 1, 'C'); 

    }

    //Colocamos Subtotal, Descuento y Monto total

    $pdf->setX(80);
    
    $pdf->Cell(40,7,'Sub-Total',1, 0, 'C');
    $pdf->Cell(30,7,$datos->montoSubTotal,1, 1, 'C');

    $pdf->setX(80);
    
    $pdf->Cell(40,7,'Descuento',1, 0, 'C');
    $pdf->Cell(30,7,$datos->descuento_monto,1, 1, 'C');

    $pdf->setX(80);
    
    $pdf->Cell(40,7,'Total',1, 0, 'C');
    $pdf->Cell(30,7,$datos->montoTotal,1, 1, 'C');


    //devolvemos el pdf al controlador

    return $pdf;
    
  }





}