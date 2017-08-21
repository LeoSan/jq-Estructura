<?php
require_once "Zend/Registry.php";
class Controlactivos_IndexController extends Zend_Controller_Action
{
    public $model = "";

    public function init(){
        $this->model = new Controlactivos_Model_Activos();
        $this->view->baseUrl = $this->getRequest()->getBaseUrl();
        session_start();
    }

    // Genera la vista principal del modulo gestion de vacaciones.
    public function indexAction(){
        $vacacionesModel = new Controlactivos_Model_Activos();
        echo $vacacionesModel->mainfunction();
        exit;
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewProveedorAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewTipoAsignacionAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewTipoCategoriaAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }


    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewTipoEstatusAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewTipoSubcategoriaAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewEstadoFisicoAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewListActivoMainAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewFormActivoMainAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewListTrackingAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Genera Interfaz
     * @access public
     *
     */
    public function viewListMotivoAction(){
        $cataCategoriaModel = new Controlactivos_Model_Activos();

    }












    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Proveedor
     * @access public
     *
     */
    public function obtenerJsonProveedorAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonProveedor();
        echo $arregloTemp;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Tipo asignacion
     * @access public
     *
     */
    public function obtenerJsonTipoAsignacionAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonTipoAsignaciones();
        echo $arregloTemp;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Categoria
     * @access public
     *
     */
    public function obtenerJsonCategoriaAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonCategoria();
        echo $arregloTemp;
        exit();
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Estatus
     * @access public
     *
     */
    public function obtenerJsonEstatusAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonEstatus();
        echo $arregloTemp;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Estatus
     * @access public
     *
     */
    public function obtenerJsonSubcategoriaAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonSubcategoria();
        echo $arregloTemp;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Estado Fisico
     * @access public
     *
     */
    public function obtenerJsonEstadoFisicoAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonEstadoFisico();
        echo $arregloTemp;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Activo Main
     * @access public
     *
     */
    public function obtenerJsonActivoMainAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonActivoMain();
        echo $arregloTemp;
        exit();
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Tracking
     * @access public
     *
     */
    public function obtenerJsonTrackingAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonTracking();
        echo $arregloTemp;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Ontiene el Json de la tabla Categoria
     * @access public
     *
     */
    public function obtenerJsonMotivoAction(){
        $Modelo  = new Controlactivos_Model_Activos();
        $arregloTemp = $Modelo->parseoJsonMotivo();
        echo $arregloTemp;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar los valores en la tabla ->ACTMOTIVOSOL
     * @access public
     *
     */
    public function insertarEditarEstatusAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarEditarEstatus($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar los valores en la tabla ->ACTMOTIVOSOL
     * @access public
     *
     */
    public function insertarEditarMotivoAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarEditarMotivo($params);
        echo $result;
        exit();
    }


    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar los valores en la tabla ->ACTESTADO_FISICO
     * @access public
     *
     */
    public function insertarEditarTipoEstadoFisicoAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarEditarTipoEstadoFisico($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar ó Editar los valores en la tabla ->ACTPROVEEDOR
     * @access public
     *
     */
    public function insertarEditarProveedorAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarEditarProveedor($params);
        echo $result;
        exit();
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar los valores en la tabla ->ACTTIPOASIGNACION
     * @access public
     *
     */
    public function insertarAsignacionAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarAsignacion($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar los valores en la tabla ->ACTTIPOASIGNACION
     * @access public
     *
     */
    public function insertarEditarCategoriaAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarEditarCategoria($params);
        echo $result;
        exit();
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar los valores en la tabla ->ACTSUBCATEGORIA
     * @access public
     *
     */
    public function insertarEditarSubCategoriaAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarEditarSubCategoria($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar los valores en la tabla ->ACTIVOMAIN
     * @access public
     *
     */
    public function insertarActivoAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarActivo($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite insertar los valores en la tabla ->ACTtracking
     * @access public
     *
     */
    public function insertarTrackingAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->insertarTracking($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un borrado lógico en la bases de datos ->deleteEstatsus
     * @access public
     *
     */
    public function deleteEstatusAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->deleteEstatus($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un borrado lógico en la bases de datos ->deleteCategoria
     * @access public
     *
     */
    public function deleteCategoriaAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->deleteCategoria($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un borrado lógico en la bases de datos ->deleteSubCategoria
     * @access public
     *
     */
    public function deleteSubCategoriaAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->deleteSubCategoria($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un borrado lógico en la bases de datos ->deleteProveedor
     * @access public
     *
     */
    public function deleteProveedorAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->deleteProveedor($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un borrado lógico en la bases de datos ->deleteEstadoFisico
     * @access public
     *
     */
    public function deleteEstadoFisicoAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->deleteEstadoFisico($params);
        echo $result;
        exit();
    }


    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un borrado lógico en la bases de datos ->deleteEstadoFisico
     * @access public
     *
     */
    public function deleteMotivoAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->deleteMotivo($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un borrado lógico en la bases de datos ->deleteACTIVOMAIN
     * @access public
     *
     */
    public function deleteActivoMainAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->deleteActivoMain($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated
     * @access public
     *
     */
    public function obtenerEstatusIdAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->obtenerEstatusId('json',$params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated
     * @access public
     *
     */
    public function obtenerMotivoIdAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->obtenerMotivoId('json',$params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated
     * @access public
     *
     */
    public function obtenerEstadoFisicoIdAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->obtenerEstadoFisicoId('json',$params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated
     * @access public
     *
     */
    public function obtenerProveedorIdAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->obtenerProveedorId('json',$params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated
     * @access public
     *
     */
    public function obtenerCategoriaIdAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->obtenerCategoriaId('json',$params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated
     * @access public
     *
     */
    public function obtenerSubCategoriaIdAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->obtenerSubCategoriaId('json',$params);
        echo $result;
        exit();
    }



























    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un select con el estado fisicos del activo
     * @access public
     *
     */
    public function selectCategoriaAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->selectCategoria($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un select con el estado fisicos del activo
     * @access public
     *
     */
    public function selectAsignacionAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->selectAsignacion($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un select con el estado fisicos del activo
     * @access public
     *
     */
    public function selectSubCategoriaAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->selectSubCategoria($params);
        echo $result;
        exit();
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un select con el estado fisicos del activo
     * @access public
     *
     */
    public function selectEstadoFisicoAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->selectEstadoFisico($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un select con el estado fisicos del activo
     * @access public
     *
     */
    public function selectProveedorAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->selectProveedor($params);
        echo $result;
        exit();
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @deprecated Permite generar un select con el estado fisicos del activo
     * @access public
     *
     */
    public function selectMotivoAction(){
        $params = $this->getRequest()->getParams();
        $Modelo  = new Controlactivos_Model_Activos();
        $result = $Modelo->selectMotivo($params);
        echo $result;
        exit();
    }






}//fin del controlador