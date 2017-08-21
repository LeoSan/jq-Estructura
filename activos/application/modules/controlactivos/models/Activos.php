<?php

class Controlactivos_Model_Activos
{

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener todos los proveedores
     * @access public
     *
     */
    public function getAllProveedor($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.GETACTPROVEEDOR(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener todos los tipos de asignaciones
     * @access public
     *
     */
    public function getAllTipoAsignacion($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.GETACTTIPOASIGNACION(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener todos los tipos de categorias
     * @access public
     *
     */
    public function getAllCategorias($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.GETACTCATEGORIA(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener los Estatus
     * @access public
     *
     */
    public function getAllEstatus($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.GETACTESTATUS(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener las subcategorias
     * @access public
     *
     */
    public function getAllSubcategorias($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.GETACTSUBCATEGORIA(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener las subcategorias por un parametro
     * @access public
     *
     */
    public function getSubcategoriasParam($typeResponses=1, $data)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.GETACTSUBCATEGORIA_IDCATEGORIA('".$data['valor']."', :RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener el tipo de estado fisico
     * @access public
     *
     */
    public function getAllEstadoFisico($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.GETACTESTADO_FISICO(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener los diferentes activos
     * @access public
     *
     */
    public function getAllActivo($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.GETACTIVOMAIN(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener los diferentes activos
     * @access public
     *
     */
    public function getAllTracking($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.getACTTRACKING(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite conectar con la BD y obtener todos los tipos de categorias
     * @access public
     *
     */
    public function getAllMotivo($typeResponses=1)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.getACTMOTIVOSOL(:RESDATA); END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if ($typeResponses == 1) {
            return $result;
        } else {
            return json_encode($result);
        }

    }






























    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla Proveedor
     * @access public
     *
     */
    public function parseoJsonProveedor(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllProveedor();
        $response['records'] = count($arregloTemp);
        $response['page'] = 1;
        $response['total'] = 4;

        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id'] = $key;
            $response['rows'][$key]['cell'] = array(
                $item['ID_PROVEEDOR']  = $filas['ID_PROVEEDOR'],
                $item['NOM_PROVEEDOR'] = $filas['NOM_PROVEEDOR'],
                $item['DES_PROVEEDOR'] = $filas['DES_PROVEEDOR'],
                $item['ACCION']             = $this->metodoGeneraBoton($filas['ID_PROVEEDOR'], 'Proveedor', 'AccionProveedor'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla Tipo Asignaciones
     * @access public
     *
     */
    public function parseoJsonTipoAsignaciones(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllTipoAsignacion();
        $response['records'] = count($arregloTemp);
        $response['page'] = 1;
        $response['total'] = 4;

        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id'] = $key;
            $response['rows'][$key]['cell'] = array(
                $item['ID_ASIGNACION']      = $filas['ID_ASIGNACION'],
                $item['NOM_ASIGNACION']     = $filas['NOM_ASIGNACION'],
                $item['DESC_ASIGNACION']    = $filas['DESC_ASIGNACION'],
                $item['REFERENCIA']         = $filas['REFERENCIA'],
                $item['ACCION']             = $this->metodoGeneraBoton($filas['ID_ASIGNACION'], 'TipoAsignaciones', 'AccionTipoAsignaciones'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla Categorias
     * @access public
     *
     */
    public function parseoJsonCategoria(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllCategorias();
        $response['records'] = count($arregloTemp);
        $response['page'] = 1;
        $response['total'] = 4;

        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id'] = $key;
            $response['rows'][$key]['cell'] = array(
                $item['ID_ACTCATEGORIA']  = $filas['ID_ACTCATEGORIA'],
                $item['NOM_CATEGORIA']    = $filas['NOM_CATEGORIA'],
                $item['DESC_CATEGORIA']   = $filas['DESC_CATEGORIA'],
                $item['ACCION']           = $this->metodoGeneraBoton($filas['ID_ACTCATEGORIA'], 'Categoria', 'AccionCategoria'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla ACTSUBCATEGORIA
     * @access public
     *
     */
    public function parseoJsonSubcategoria(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllSubcategorias();
        $response['records'] = count($arregloTemp);
        $response['page'] = 1;
        $response['total'] = 4;

        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id']    = $key;
            $response['rows'][$key]['cell']  = array(
                $item['ID_ACTSUBCATEGORIA']  = $filas['ID_ACTSUBCATEGORIA'],
                $item['NOM_SUBCATEGORIA']    = $filas['NOM_SUBCATEGORIA'],
                $item['DESC_SUBCATEGORIA']   = $filas['DESC_SUBCATEGORIA'],
                $item['NOM_CATEGORIA']       = $filas['NOM_CATEGORIA'],
                $item['ACCION'] = $this->metodoGeneraBoton($filas['ID_ACTSUBCATEGORIA'], 'Subcategoria', 'AccionSubCategoria'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla Categorias
     * @access public
     *
     */
    public function parseoJsonMotivo(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllMotivo();
        $response['records'] = count($arregloTemp);
        $response['page'] = 1;
        $response['total'] = 4;

        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id'] = $key;
            $response['rows'][$key]['cell'] = array(
                $item['ID_ACTMOTIVOSOL']    = $filas['ID_ACTMOTIVOSOL'],
                $item['NOM_MOTIVO']         = $filas['NOM_MOTIVO'],
                $item['DESC_MOTIVO']        = $filas['DESC_MOTIVO'],
                $item['ACCION']             = $this->metodoGeneraBoton($filas['ID_ACTMOTIVOSOL'], 'Motivo', 'AccionMotivo'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla ACTESTATUS
     * @access public
     *
     */
    public function parseoJsonEstatus(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllEstatus();
        $response['records'] = count($arregloTemp);
        $response['page'] = 1;
        $response['total'] = 4;

        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id'] = $key;
            $response['rows'][$key]['cell'] = array(
                $item['ID_ESTATUS']  = $filas['ID_ESTATUS'],
                $item['NOM_ESTATUS'] = $filas['NOM_ESTATUS'],
                $item['DESC_ESTATUS'] = $filas['DESC_ESTATUS'],
                $item['ACCION'] = $this->metodoGeneraBoton($filas['ID_ESTATUS'], 'Estatus', 'AccionEstatus'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla ACTESTADOFISICO
     * @access public
     *
     */
    public function parseoJsonEstadoFisico(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllEstadoFisico();
        $response['records'] = count($arregloTemp);
        $response['page'] = 1;
        $response['total'] = 4;

        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id']    = $key;
            $response['rows'][$key]['cell']  = array(
                $item['ID_ESTADO_FISICO']  = $filas['ID_ESTADO_FISICO'],
                $item['NOM_ESTADO_FISICO']     = $filas['NOM_ESTADO_FISICO'],
                $item['DES_ESTADO_FISICO']    = $filas['DES_ESTADO_FISICO'],
                $item['ACCION'] = $this->metodoGeneraBoton($filas['ID_ESTADO_FISICO'], 'EstadoFisico', 'AccionEstado'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla ACTIVO
     * @access public
     *
     */
    public function parseoJsonActivoMain(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllActivo();
        $response['records'] = count($arregloTemp);
        $response['page']  = 1;
        $response['total'] = 4;

        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id']    = $key;
            $response['rows'][$key]['cell']  = array(
                $item['ID_ACTIVO']         = $filas['ID_ACTIVO'],
                $item['ID_ACTCATEGORIA']   = $filas['ID_ACTCATEGORIA'],
                $item['ID_ESTADO_FISICO']  = $filas['ID_ESTADO_FISICO'],
                $item['ID_ESTATUS']        = $filas['ID_ESTATUS'],
                $item['ID_PROVEEDOR']      = $filas['ID_PROVEEDOR'],
                $item['ID_SUCURSAL']       = $filas['ID_SUCURSAL'],
                $item['COD_BARRA']         = $filas['COD_BARRA'],
                $item['NUM_FACTURA']       = $filas['NUM_FACTURA'],
                $item['NUM_SERIE']         = $filas['NUM_SERIE'],
                $item['MARCA']             = $filas['MARCA'],
                $item['MODELO']            = $filas['MODELO'],
                $item['DES_UBICACION']     = $filas['DES_UBICACION'],
                $item['DESC_ACTIVO']       = $filas['DESC_ACTIVO'],
                $item['FECHA_COMPRA']      = $filas['FECHA_COMPRA'],
                $item['ACCION'] = $this->metodoGeneraBoton($filas['ID_ACTIVO'], 'Activo', 'AccionActivo'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite realizar un parseo del arreglo obtenido de la tabla ACTTRACKING
     * @access public
     *
     */
    public function parseoJsonTracking(){
        //Parseo para el Grid
        $arregloTemp = $this->getAllTracking();
        $response['records'] = count($arregloTemp);
        $response['page']  = 1;
        $response['total'] = 4;
        foreach($arregloTemp as $key => $filas){
            $response['rows'][$key]['id']    = $key;
            $response['rows'][$key]['cell']  = array(
                $item['ID_TRACKING']     = $filas['ID_TRACKING'],
                $item['NOM_ESTATUS']     = $filas['NOM_ESTATUS'],
                $item['CANTIDAD']        = $filas['CANTIDAD'],
                $item['NOM_MOTIVO']      = $filas['NOM_MOTIVO'],
                $item['NOM_SUBCATEGORIA']= $filas['NOM_SUBCATEGORIA'],
                $item['NOM_SOLICITANTE'] = $filas['NOM_SOLICITANTE'],
                $item['FECHA_SOLICITUD'] = $this->metodoFormateoFecha($filas['FECHA_SOLICITUD']),
                $item['ACCION'] = $this->metodoGeneraBoton($filas['ID_TRACKING'], 'tracking', 'AccionTracking'),
            );
        }//fin del for
        return json_encode($response);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar o Editar los valores en la tabla ->ACTESTATUS
     * @access public
     *
     */
    public function insertarEditarEstatus($datos){
        if ($datos['inptProceso'] == 'Guardar'){
            $query  = "BEGIN PENDUPM.PCKACTIVOS.insertACTESTATUS('".strtoupper($datos['inpNombre'])."', '".strtoupper($datos['inpDescripcion'])."', '".strtoupper($datos['inpReferencia'])."', :psError);END;";
        }else{
            $query  = "BEGIN PENDUPM.PCKACTIVOS.editACTESTATUS('".strtoupper($datos['inpId'])."', '".strtoupper($datos['inpNombre'])."', '".strtoupper($datos['inpDescripcion'])."', '".strtoupper($datos['inpReferencia'])."', :psError);END;";
        }

        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);
        return $this->metodoResulInsert($typeResponses);
    }


    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar ó Editar los valores en la tabla ->ACTMOTIVOSOL
     * @access public
     *
     */
    public function insertarEditarMotivo($datos)
    {
        if ($datos['inptProceso'] == 'Guardar') {
            $query = "BEGIN PENDUPM.PCKACTIVOS.insertACTMOTIVO('" . strtoupper($datos['inpNombre']) . "', '" . strtoupper($datos['inpDescripcion']) . "', '" . strtoupper($datos['inpReferencia']) . "', :psError);END;";
        } else {
            $query = "BEGIN PENDUPM.PCKACTIVOS.editACTMOTIVO('" . strtoupper($datos['inpId']) . "', '" . strtoupper($datos['inpNombre']) . "', '" . strtoupper($datos['inpDescripcion']) . "', '" . strtoupper($datos['inpReferencia']) . "', :psError);END;";
        }

        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);
        return $this->metodoResulInsert($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar los valores en la tabla ->ACTESTADO_FISICO
     * @access public
     *
     */
    public function insertarEditarTipoEstadoFisico($datos){
        if ($datos['inptProceso'] == 'Guardar') {
            $query  = "BEGIN PENDUPM.PCKACTIVOS.insertACTESTADO_FISICO('".strtoupper($datos['inpNombre'])."', '".strtoupper($datos['inpDescripcion'])."', '".strtoupper($datos['inpReferencia'])."', :psError);END;";
        } else {
            $query = "BEGIN PENDUPM.PCKACTIVOS.editACTESTADO_FISICO('" . strtoupper($datos['inpId']) . "', '" . strtoupper($datos['inpNombre']) . "', '" . strtoupper($datos['inpDescripcion']) . "', '" . strtoupper($datos['inpReferencia']) . "', :psError);END;";
        }

        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);

        return $this->metodoResulInsert($typeResponses);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar los valores en la tabla ->ACTPROVEEDOR
     * @access public
     *
     */
    public function insertarEditarProveedor($datos){
        if ($datos['inptProceso'] == 'Guardar') {
            $query  = "BEGIN PENDUPM.PCKACTIVOS.insertACTPROVEEDOR('".strtoupper($datos['inpNombre'])."', '".strtoupper($datos['inpDescripcion'])."', '".strtoupper($datos['inpReferencia'])."', :psError);END;";
        } else {
            $query = "BEGIN PENDUPM.PCKACTIVOS.editACTPROVEEDOR('" . strtoupper($datos['inpId']) . "', '" . strtoupper($datos['inpNombre']) . "', '" . strtoupper($datos['inpDescripcion']) . "', '" . strtoupper($datos['inpReferencia']) . "', :psError);END;";
        }

        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);

        return $this->metodoResulInsert($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar los valores en la tabla ->ACTTIPOASIGNACION
     * @access public
     *
     */
    public function insertarAsignacion($datos){

        $query  = "BEGIN PENDUPM.PCKACTIVOS.insertACTASIGNACION('".strtoupper($datos['inpNombre'])."', '".strtoupper($datos['inpDescripcion'])."', '".strtoupper($datos['inpReferencia'])."', :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);

        return $this->metodoResulInsert($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar los valores en la tabla ->ACTCATEGORIA
     * @access public
     *
     */
    public function insertarEditarCategoria($datos){
        if ($datos['inptProceso'] == 'Guardar') {
            $query  = "BEGIN PENDUPM.PCKACTIVOS.insertACTCATEGORIA('".strtoupper($datos['inpNombre'])."', '".strtoupper($datos['inpDescripcion'])."', '".strtoupper($datos['inpReferencia'])."', :psError);END;";
        } else {
            $query = "BEGIN PENDUPM.PCKACTIVOS.editACTCATEGORIA('" . strtoupper($datos['inpId']) . "', '" . strtoupper($datos['inpNombre']) . "', '" . strtoupper($datos['inpDescripcion']) . "', '" . strtoupper($datos['inpReferencia']) . "', :psError);END;";
        }

        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);

        return $this->metodoResulInsert($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar los valores en la tabla ->ACTCATEGORIA
     * @access public
     *
     */
    public function insertarEditarSubCategoria($datos){
        if ($datos['inptProceso'] == 'Guardar') {
            $query  = "BEGIN PENDUPM.PCKACTIVOS.insertACTSUBCATEGORIA(  '".strtoupper($datos['inpCategoria'])."', '".strtoupper($datos['inpNombre'])."', '".strtoupper($datos['inpDescripcion'])."', '".strtoupper($datos['inpReferencia'])."', :psError);END;";
        } else {
            $query = "BEGIN PENDUPM.PCKACTIVOS.editACTSUBCATEGORIA('" . strtoupper($datos['inpId']) . "', '".strtoupper($datos['inpCategoria'])."', '" . strtoupper($datos['inpNombre']) . "', '" . strtoupper($datos['inpDescripcion']) . "', '" . strtoupper($datos['inpReferencia']) . "', :psError);END;";
        }
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);

        return $this->metodoResulInsert($typeResponses);
    }


    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar los valores en la tabla ->ACTCATEGORIA
     * @access public
     *
     */
    public function insertarActivo($datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.insertACTIVOMAIN(".$datos['inptIdSucursal'].", ".$datos['inptEstadoFisico'].", ".$datos['inptCategoria'].", ".$datos['inptSubCategoria'].", ".$datos['inptProveedor'].", '".strtoupper($datos['inptMarca'])."', '".strtoupper($datos['inptModelo'])."',  '".strtoupper($datos['areaDesActivo'])."',  '".strtoupper($datos['inptCoBarras'])."', '".strtoupper($datos['inptSerie'])."', '".strtoupper($datos['inptFactura'])."', '".strtoupper($datos['areaDesActivo'])."', '".$datos['inptFechaCompra']."', '".strtoupper($datos['areaDesUbicacion'])."', ".$datos['inptEstatus'].", ".$datos['inptUsuario'].", :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);

        return $this->metodoResulInsert($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite insertar los valores en la tabla ->ACTTRACKING
     * @access public
     *
     */
    public function insertarTracking($datos){
        $datos['inpIdActivo'] = 0; //Aqui hay que determinar que se debe colocar debido que el usuario no escoje ningun activo cuando realiza una solicitud
        $datos['inpSolicitante'] = 31; //ID usuario
        $query  = "BEGIN PENDUPM.PCKACTIVOS.ADDTRACKING(".$datos['inpIdActivo'].", ".$datos['inpSolicitante'].", ".$datos['inpIdEstatus'].", '".$datos['areaDesSolicitud']."', ".$datos['inpIdEstatusDetalle'].", ".$datos['inpSubCategoria'].",  ".$datos['inpMotivoSolicitud'].", ".$datos['inpCantidad'].", :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);

        return $this->metodoResulInsert($typeResponses);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite generar un borrado lógico en la bases de datos ->deleteACTESTATUS
     * @access public
     *
     */
    public function deleteEstatus($datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.deleteACTESTATUS(".$datos['inpIdEstatus'].", :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);
        return $this->metodoResulDelete($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite generar un borrado lógico en la bases de datos ->deleteCategoria
     * @access public
     *
     */
    public function deleteCategoria($datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.deleteACTCATEGORIA(".$datos['inpIdCategoria'].", :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);
        return $this->metodoResulDelete($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite generar un borrado lógico en la bases de datos ->deleteCategoria
     * @access public
     *
     */
    public function deleteSubCategoria($datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.deleteACTSUBCATEGORIA(".$datos['inpIdSubCategoria'].", :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);
        return $this->metodoResulDelete($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite generar un borrado lógico en la bases de datos ->deleteProveedor
     * @access public
     *
     */
    public function deleteProveedor($datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.deleteACTPROVEEDOR(".$datos['inpIdProveedor'].", :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);
        return $this->metodoResulDelete($typeResponses);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite generar un borrado lógico en la bases de datos ->deleteCategoria
     * @access public
     *
     */
    public function deleteEstadoFisico($datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.deleteACTESTADO_FISICO(".$datos['inpIdEstadoFisico'].", :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);
        return $this->metodoResulDelete($typeResponses);

    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite generar un borrado lógico en la bases de datos ->deleteCategoria
     * @access public
     *
     */
    public function deleteMotivo($datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.deleteACTMOTIVO(".$datos['inpIdMotivo'].", :psError);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $typeResponses = $oracleFactory->set($query);
        return $this->metodoResulDelete($typeResponses);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description
     * @access public
     *
     */
    public function obtenerEstatusId($typeResponses, $datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.getACTESTATUS_ID('".$datos['inpIdEstatus']."', :RESDATA);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description
     * @access public
     *
     */
    public function obtenerMotivoId($typeResponses, $datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.getACTMOTIVO_ID('".$datos['inpIdMotivo']."', :RESDATA);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }


    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description
     * @access public
     *
     */
    public function obtenerEstadoFisicoId($typeResponses, $datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.getACTESTADO_FISICO_ID('".$datos['inpIdEstadoFisico']."', :RESDATA);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description
     * @access public
     *
     */
    public function obtenerProveedorId($typeResponses, $datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.getACTPROVEEDOR_ID('".$datos['inpIdProveedor']."', :RESDATA);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description
     * @access public
     *
     */
    public function obtenerCategoriaId($typeResponses, $datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.getACTCATEGORIA_ID('".$datos['inpIdCategoria']."', :RESDATA);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description
     * @access public
     *
     */
    public function obtenerSubCategoriaId($typeResponses, $datos){
        $query  = "BEGIN PENDUPM.PCKACTIVOS.getACTSUBCATEGORIA_ID('".$datos['inpIdSubCategoria']."', :RESDATA);END;";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $result = $oracleFactory->getAll($query);
        if($typeResponses==1){
            return $result;
        }else{
            return json_encode($result);
        }
    }

































    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description: Permite Generar un Select con los valores de categoria
     * @access public
     *
     */
    public function selectCategoria($datos){
        $typeResponses = $this->getAllCategorias();
        $stringSelect = '<option value =""> [Seleccione] </option>';
        if($typeResponses != 0 ){
            foreach($typeResponses as $key => $filas){
                $stringSelect.='<option value= "'.$filas['ID_ACTCATEGORIA'].'"> '.$filas['NOM_CATEGORIA'].' </option>';
            }//fin del for
        }else{
            $stringSelect = '<option value =""> No Disponibles </option>';
        }
        return $stringSelect;
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description: Permite Generar un Select con los valores de categoria
     * @access public
     *
     */
    public function selectMotivo($datos){
        $typeResponses = $this->getAllMotivo();
        $stringSelect = '<option value =""> [Seleccione] </option>';
        if($typeResponses != 0 ){
            foreach($typeResponses as $key => $filas){
                $stringSelect.='<option value= "'.$filas['ID_ACTMOTIVOSOL'].'"> '.$filas['NOM_MOTIVO'].' </option>';
            }//fin del for
        }else{
            $stringSelect = '<option value =""> No Disponibles </option>';
        }
        return $stringSelect;
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description: Permite Generar un Select con los valores de categoria
     * @access public
     *
     */
    public function selectAsignacion($datos){
        $typeResponses = $this->getAllTipoAsignacion();
        $stringSelect = '<option value =""> [Seleccione] </option>';
        if($typeResponses != 0 ){
            foreach($typeResponses as $key => $filas){
                $stringSelect.='<option value= "'.$filas['ID_ASIGNACION'].'"> '.$filas['NOM_ASIGNACION'].' </option>';
            }//fin del for
        }else{
            $stringSelect = '<option value =""> No Disponibles </option>';
        }
        return $stringSelect;
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description: Permite Generar un Select con los valores de categoria
     * @access public
     *
     */
    public function selectSubCategoria($datos){
        $typeResponses = $this->getSubcategoriasParam(1, $datos);
        $stringSelect = '<option value =""> [Seleccione] </option>';
        if(empty($typeResponses) != true ){
            foreach($typeResponses as $key => $filas){
                $stringSelect.='<option value= "'.$filas['ID_ACTSUBCATEGORIA'].'"> '.$filas['NOM_SUBCATEGORIA'].' </option>';
            }//fin del for
        }else{
            $stringSelect = '<option value =""> No Disponibles </option>';
        }
        return $stringSelect;
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description: Permite Generar un Select con los valores de categoria
     * @access public
     *
     */
    public function selectEstadoFisico($datos){
        $typeResponses = $this->getAllEstadoFisico(1, $datos);
        $stringSelect = '<option value =""> [Seleccione] </option>';
        if(empty($typeResponses) != true ){
            foreach($typeResponses as $key => $filas){
                $stringSelect.='<option value= "'.$filas['ID_ESTADO_FISICO'].'"> '.$filas['NOM_ESTADO_FISICO'].' </option>';
            }//fin del for
        }else{
            $stringSelect = '<option value =""> No Disponibles </option>';
        }
        return $stringSelect;
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description: Permite Generar un Select con los valores de categoria
     * @access public
     *
     */
    public function selectProveedor($datos){
        $typeResponses = $this->getAllProveedor(1, $datos);
        $stringSelect = '<option value =""> [Seleccione] </option>';
        if(empty($typeResponses) != true ){
            foreach($typeResponses as $key => $filas){
                $stringSelect.='<option value= "'.$filas['ID_PROVEEDOR'].'"> '.$filas['NOM_PROVEEDOR'].' </option>';
            }//fin del for
        }else{
            $stringSelect = '<option value =""> No Disponibles </option>';
        }
        return $stringSelect;
    }













    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite ordenar y componer los mensajes de los insert
     * @access public
     *
     */
    public function metodoResulInsert($typeResponses, $mensajeExito = 0, $mensajeFalla=0){
         if ($mensajeExito == 0){ $mensajeExito = 'Almacenamiento correcto.';}
         if ($mensajeFalla == 0){ $mensajeFalla = 'Falla en el almacenamiento = ';}

        if($typeResponses==1){
            $result['result'] = 1;
            $result['msj'] = $mensajeExito;
        }else{
            $result['result'] = 0;
            $result['msj'] = $mensajeFalla.":".$typeResponses;
        }
        return json_encode($result);
    }
    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite ordenar y componer los mensajes de los insert
     * @access public
     *
     */
    public function metodoResulDelete($typeResponses, $mensajeExito = 0, $mensajeFalla=0){
         if ($mensajeExito == 0){ $mensajeExito = 'Resgistro Eliminado.';}
         if ($mensajeFalla == 0){ $mensajeFalla = 'Falla en el proceso = ';}

        if($typeResponses==1){
            $result['result'] = 1;
            $result['msj'] = $mensajeExito;
        }

        if($typeResponses==0){
            $result['result'] = 0;
            $result['msj'] = $mensajeFalla.":".$typeResponses;
        }

        if($typeResponses==2){
            $result['result'] = 2;
            $result['msj'] = "! Disculpe no puede remover este registro, está siendo utilizado en otra tabla ¡";
        }

        return json_encode($result);
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite formatear la fecha
     * @access public
     *
     */
    public function metodoFormateoFecha($fechaOriginal){
        $fechaDesfrag = explode('-', $fechaOriginal);
        $arrayMeses = array('01'=>'ENE', '02'=>'FEB', '03'=>'MAR', '04'=>'ABR', '05'=>'MAY', '06'=>'JUL', '07'=>'JUN', '08'=>'AUG', '09'=>'SEP', '10'=>'OCT', '11'=>'NOV', '12'=>'DIC');
        $fechaFinal = $fechaDesfrag[0]."-".$arrayMeses[$fechaDesfrag[1]]."-".$fechaDesfrag[2];
        return $fechaFinal;
    }

    /**
     * @author Leonard Cuenca <ljcuenca@pendulum.com.mx>
     * @company Neta System C.A
     * @description Permite generar el boton para eliminar o editar un registro del jqGrid
     * @access public
     *
     */
    public function metodoGeneraBoton($id, $nomData, $nombreBoton){
        $string = '<span class="glyphicon glyphicon-pencil hand-punter ico-blue btnEdita'.$nombreBoton.'"  data-toggle="modal" data-target="#exampleModal"  data-'.$nomData.'="'.$id.'"></span><span class="glyphicon glyphicon-remove hand-punter ico-red  btnElimina'.$nombreBoton.'" data-'.$nomData.'="'.$id.'"></span>';
        return $string;
    }



    }//fin del modelo
