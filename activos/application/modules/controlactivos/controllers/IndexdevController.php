<?php
require_once "Zend/Registry.php";
class Controlactivos_IndexdevController extends Zend_Controller_Action
{
    public $model = "";
    public $params = "";
    public $oracleFactory = "";

    public function init()
    {
        $this->view->baseUrl = $this->getRequest()->getBaseUrl();
        $this->model = new Controlactivos_Model_Activosdev();
        $this->params = $this->getRequest()->getParams();

    }

    // Genera la vista principal del modulo gestion de vacaciones.
    public function indexAction()
    {
        $activosModel = new Controlactivos_Model_Activosdev();
        //$this->view->mensaje =  $activosModel->mainfunction();
        //exit;
    }

    public function addAction(){

        $activosModel = new Controlactivos_Model_Activosdev();
        echo $activosModel->insert($this->params);
        exit;

    }

    public function editAction(){

        $activosModel = new Controlactivos_Model_Activosdev();
        echo $activosModel->update($this->params);
        exit;

    }

    public function logicDeleteAction(){

        $activosModel = new Controlactivos_Model_Activosdev();
        echo $activosModel->logicDelete($this->params);
        exit;

    }

    public function testAction(){

        $activosModel = new Controlactivos_Model_Activosdev();
        $result=$activosModel->getAllProveedor();
        echo '<pre>';print_r($result);
        exit;

    }






}