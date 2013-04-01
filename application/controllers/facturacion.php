<?php
class Facturacion extends CI_Controller {

    public function crearFactura()
    {


      //cargamos fpdf
      require('application/third_party/fpdf/fpdf.php');

      $pdf = new FPDF();
      $pdf->AddPage();
      $pdf->SetFont('Arial','B',16);
      $pdf->Cell(40,10,'Hello World!');
      $pdf->Output();


    }
}
?>