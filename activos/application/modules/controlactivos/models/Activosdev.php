<?php

class Controlactivos_Model_Activosdev
{

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

    public function insert($datos)
    {
        $query = "BEGIN PENDUPM.PCKACTIVOS.insertACTESTATUS('$datos[UNO]', '$datos[DOS]', '$datos[TRES]', :psError ); END;";

        "INSERT INTO PENDUPM.ACTIVOMAIN
   (ID_ACTIVO, ID_SUCURSAL, ID_ESTADO_FISICO, ID_ACTCATEGORIA, ID_PROVEEDOR, 
    MARCA, MODELO, NOM_ACTIVO, COD_BARRA, NUM_SERIE, 
    NUM_FACTURA, DESC_ACTIVO, FECHA_COMPRA, DES_UBICACION, ID_ESTATUS)
 VALUES
   (1, 5, 1, 1, 333, 
    'Una marca', 'Un Modelo', 'ACTIVO_TEST', '213131654654', '654654987987', 
    'asasa64654654qwqw', 'Es un activo de prueba', TO_DATE('08/03/2017 00:00:00', 'MM/DD/YYYY HH24:MI:SS'), NULL, 1);
COMMIT
";
        $oracleFactory = Pendum_Db_DbFactory::factory('oracle');
        $data = $oracleFactory->set($query);
        echo '<pre>';print_r($data);exit;
        return "Voy a insertar en Oracle";
    }

    public function update($datos)
    {

        return "Voy a editar en Oracle";
    }

    public function logicDelete($datos)
    {

        return "Voy a borrar logicamente en Oracle";
    }


}
