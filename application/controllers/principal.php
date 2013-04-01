<?php
class Principal extends CI_Controller {

    public function index()
    {


      //cargamos redbeans
      // require('application/third_party/fpdf/fpdf.php');

      // $pdf = new FPDF();
      // $pdf->AddPage();
      // $pdf->SetFont('Arial','B',16);
      // $pdf->Cell(40,10,'Hello World!');
      // $pdf->Output();

      $this->load->view('interfaz/index.html');

    }
}
?>