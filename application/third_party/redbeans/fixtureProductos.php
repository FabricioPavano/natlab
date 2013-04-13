<?php

R::wipe('producto');

$productos = array(
  array('nombre'=>'Aflamin Ext. x 30 c.c'         , 'precio_mayorista'=>'22' ,'precio_comercial'=>'26' ,'stock'=>'0'),
  array('nombre'=>'Alcachofa + Centella x 50 cap.', 'precio_mayorista'=>'30' ,'precio_comercial'=>'36' ,'stock'=>'0'),
  array('nombre'=>'Altaten Ext. x 30 c.c'         , 'precio_mayorista'=>'20' ,'precio_comercial'=>'24' ,'stock'=>'0'),
  array('nombre'=>'Atritil x 50 cap. 500 mg.'     , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Bilaxan jbe x 240 c.c'         , 'precio_mayorista'=>'38' ,'precio_comercial'=>'46' ,'stock'=>'0'),
  array('nombre'=>'Calciporos x 50 cap. 500 mg.'  , 'precio_mayorista'=>'39' ,'precio_comercial'=>'47' ,'stock'=>'0'),
  array('nombre'=>'Cascabel Aceite x 100 c.c'     , 'precio_mayorista'=>'100','precio_comercial'=>'120','stock'=>'0'),
  array('nombre'=>'Cascabel Cap. 500 mg. x 100ud.', 'precio_mayorista'=>'200','precio_comercial'=>'240','stock'=>'0'),
  array('nombre'=>'Cardioton Ext. x 30 c.c'       , 'precio_mayorista'=>'25' ,'precio_comercial'=>'30' ,'stock'=>'0'),
  array('nombre'=>'Complejo B x 50 cap. 500 mg.'  , 'precio_mayorista'=>'94' ,'precio_comercial'=>'113','stock'=>'0'),
  array('nombre'=>'Deparas Ext. x 30 c.c'         , 'precio_mayorista'=>'20' ,'precio_comercial'=>'24' ,'stock'=>'0'),
  array('nombre'=>'Diflat x 50 Cap. 500 mg.'      , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Dinsulin x 50 Cap. 500 mg.'    , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Diurren Ext. x 30 c.c'         , 'precio_mayorista'=>'20' ,'precio_comercial'=>'24' ,'stock'=>'0'),
  array('nombre'=>'Dormilex Ext. x 30 c.c'        , 'precio_mayorista'=>'20' ,'precio_comercial'=>'24' ,'stock'=>'0'),
  array('nombre'=>'Drenolax x 240 c.c'            , 'precio_mayorista'=>'30' ,'precio_comercial'=>'36' ,'stock'=>'0'),
  array('nombre'=>'Dreno-Ren x 240 c.c'           , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Elixir de Virginia x 240 c.c'  , 'precio_mayorista'=>'40' ,'precio_comercial'=>'48' ,'stock'=>'0'),
  array('nombre'=>'Enfisol Ext x 30 c.c'          , 'precio_mayorista'=>'50' ,'precio_comercial'=>'60' ,'stock'=>'0'),
  array('nombre'=>'Espirulina x 50 Cap. 500 mg.'  , 'precio_mayorista'=>'28' ,'precio_comercial'=>'34' ,'stock'=>'0'),
  array('nombre'=>'Fitocilina x 50 Cap. 500 mg.'  , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Flatcol x 50 cap. 500 mg.'     , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Flebivar Elixir x  240 c.c.'   , 'precio_mayorista'=>'40' ,'precio_comercial'=>'48' ,'stock'=>'0'),
  array('nombre'=>'Fosfoneurón x 50 caps. 500 mg.', 'precio_mayorista'=>'40' ,'precio_comercial'=>'48' ,'stock'=>'0'),
  array('nombre'=>'Fungos Tópico x 30 c.c'        , 'precio_mayorista'=>'22' ,'precio_comercial'=>'26' ,'stock'=>'0'),
  array('nombre'=>'Gastricol x 50 cap. 500 mg.'   , 'precio_mayorista'=>'39' ,'precio_comercial'=>'47' ,'stock'=>'0'),
  array('nombre'=>'Hedisbral x 50 cap. 500 mg.'   , 'precio_mayorista'=>'94' ,'precio_comercial'=>'113','stock'=>'0'),
  array('nombre'=>'Hemoforzán jbe x 240 c.c   '   , 'precio_mayorista'=>'40' ,'precio_comercial'=>'48' ,'stock'=>'0'),
  array('nombre'=>'Hemostafem x 50 cap. 500 mg.'  , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Hepatox cap. x 50 cap. 500 mg.', 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Higasan Ext. X 30 c.c'         , 'precio_mayorista'=>'20' ,'precio_comercial'=>'24' ,'stock'=>'0'),
  array('nombre'=>'Kit Femenino (tres productos)' , 'precio_mayorista'=>'102','precio_comercial'=>'123','stock'=>'0'),
  array('nombre'=>'Lisicalren x 50 cap 500 mg.'   , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Litosbil x 50 cap. 500 mg.'    , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Megaclorofil x 50 cap. 500 mg.', 'precio_mayorista'=>'94' ,'precio_comercial'=>'113','stock'=>'0'),
  array('nombre'=>'Napurisan Jarabe x 240 c.c'    , 'precio_mayorista'=>'40' ,'precio_comercial'=>'48' ,'stock'=>'0'),
  array('nombre'=>'Neolergen x 50 cap. 500 mg.'   , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Nobetil Ext. x 30 c.c'         , 'precio_mayorista'=>'25' ,'precio_comercial'=>'30' ,'stock'=>'0'),
  array('nombre'=>'Nocotin Ext. x 30 c.c'         , 'precio_mayorista'=>'25' ,'precio_comercial'=>'30' ,'stock'=>'0'),
  array('nombre'=>'Panacea pulmonar x 240 c.c'    , 'precio_mayorista'=>'40' ,'precio_comercial'=>'48' ,'stock'=>'0'),
  array('nombre'=>'Polen Granulado x 100 g.'      , 'precio_mayorista'=>'70' ,'precio_comercial'=>'84' ,'stock'=>'0'),
  array('nombre'=>'Progresovar x 50 cap. 500 mg.' , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Prostafilen x 50 cap. 500 mg.' , 'precio_mayorista'=>'35' ,'precio_comercial'=>'42' ,'stock'=>'0'),
  array('nombre'=>'Prostasil Ext. x 30 c.c'       , 'precio_mayorista'=>'25' ,'precio_comercial'=>'30' ,'stock'=>'0'),
  array('nombre'=>'Regumes Ext. x 30 c.c'         , 'precio_mayorista'=>'20' ,'precio_comercial'=>'24' ,'stock'=>'0'),
  array('nombre'=>'Sedaner Ext. x 30 c.c'         , 'precio_mayorista'=>'20' ,'precio_comercial'=>'24' ,'stock'=>'0'),
  array('nombre'=>'Tónico Digestivo x 240 c.c'    , 'precio_mayorista'=>'38' ,'precio_comercial'=>'46' ,'stock'=>'0'),
  array('nombre'=>'Totumo Concentrado x 1 lto.'   , 'precio_mayorista'=>'40' ,'precio_comercial'=>'48' ,'stock'=>'0'),
  array('nombre'=>'Venocir Ext. x 30 c.c'         , 'precio_mayorista'=>'20' ,'precio_comercial'=>'24' ,'stock'=>'0'),
  array('nombre'=>'Viadiges Ext. x 30 c.c'        , 'precio_mayorista'=>'22' ,'precio_comercial'=>'27' ,'stock'=>'0'),
  array('nombre'=>'Vigoril Ext. 30 c.c'           , 'precio_mayorista'=>'50' ,'precio_comercial'=>'60' ,'stock'=>'0'),
  array('nombre'=>'Vitamina C x 50 cap. 770 mg.'  , 'precio_mayorista'=>'50' ,'precio_comercial'=>'60' ,'stock'=>'0')
);

foreach ($productos as $producto) {
  
  
  $obProducto = R::dispense('producto');

  $obProducto->nombre           = $producto['nombre'];
  $obProducto->precio_mayorista = $producto['precio_mayorista'];
  $obProducto->precio_comercial = $producto['precio_comercial'];
  $obProducto->stock  = 0;  

  R::store($obProducto);

}


