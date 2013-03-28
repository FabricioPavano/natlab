<?php
class Principal extends CI_Controller {

    
    

    public function index()
    {


      $this->load->helper('url');

      $this->load->view('interfaz/index.html');

    }
}
?>