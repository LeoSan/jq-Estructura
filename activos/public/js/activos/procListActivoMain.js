/**
 * Created by ljcuenca on 08/08/2017.
 */

var procesoLitsActivoMain = {
    //Declaracion Variables
    numEmpleado : 'Hola',
    pathServidor : 'http://10.73.98.127/',
    //Metodo Inicial
    init : function() {
        procesoLitsActivoMain.renderGrid();
        procesoLitsActivoMain.validarForm();
        procesoLitsActivoMain.validaTeclado();
        //Metodo Carga Select
        procesoLitsActivoMain.metodoSelect(procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/select-categoria', 'inptCategoria', 1);
        procesoLitsActivoMain.metodoSelect(procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/select-asignacion', 'inptAsignacion', 1);
        procesoLitsActivoMain.metodoSelect(procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/select-estado-fisico', 'inptEstadoFisico', 1);
        procesoLitsActivoMain.metodoSelect(procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/select-proveedor', 'inptProveedor', 1);
        //Metodo Carga Select Change
        procesoLitsActivoMain.metodoChangeSelect('inptCategoria', procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/select-sub-categoria', 'inptSubCategoria');

        procesoLitsActivoMain.confirmaEliminar();
        procesoLitsActivoMain.obtenerDatos();


    },// fin init
    renderGrid : function() {
        var alto = $(document).height();
        var ancho = $(document).width();
        var grid = $('#jqGridListActivo').jqGrid({
            url: procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/obtener-json-activo-main',
            datatype: 'json',
            // postData: {
            //     userCyber   : userCyber,
            //     pantalla    : pantalla,
            //     userid      : userid,
            //     isadmin     : $('#isadmin').text(),
            //     perfil      : nodoPerfil,
            //     tipoMod     : 0,
            //     email       : emailUser
            // },
            autowidth: true,
            shrinkToFit: true,
            height: 200,
            ignoreCase: true,
//             ondblClickRow: function (rowId) {
//                 Archivo.showLoading();
// //				var rowData = $(this).getRowData(rowId);
// //				ConsultaInventario.renderElementDetail(rowData['IDDOCTO'],rowData['CREDITO']);
//             },
            colModel: [
                { label: 'ID', name: 'ID_ACTIVO', key: true, width: 75 },
                { label: 'id categoria', name: 'ID_ACTCATEGORIA', width: 150 },
                { label: 'id estado fisico', name: 'ID_ESTADO_FISICO', width: 150 },
                { label: 'id estatus', name: 'ID_ESTATUS', width: 150 },
                { label: 'id proveedor', name: 'ID_PROVEEDOR', width: 150 },
                { label: 'id sucirsal', name: 'ID_SUCURSAL', width: 150 },
                { label: 'Códgo Barras', name: 'COD_BARRA', width: 150 },
                { label: 'No. Factura', name: 'NUM_FACTURA', width: 150 },
                { label: 'No. Serie', name: 'NUM_SERIE', width: 150 },
                { label: 'Marca', name: 'MARCA', width: 150 },
                { label: 'Modelo', name: 'MODELO', width: 150 },
                { label: 'Ubicación', name: 'DES_UBICACION', width: 150 },
                { label: 'Descripción', name: 'DESC_ACTIVO', width: 150 },
                { label: 'Fecha compra', name: 'FECHA_COMPRA', width: 150 },
                { label: 'Acción', name: 'ACCION', width: 150 },
            ],
            viewrecords: true,
            rowNum: 20,
            pager: "#jqGridPagerListActivo",
            sortorder: "asc",
        });
        $('#jqGridListActivo').jqGrid('filterToolbar',{searchOperators: true, stringResult: true, searchOnEnter: false});
        // $('#jqGridListActivo').jqGrid('navGrid','#jqGridPagerListActivo',{edit:true,add:true,del:true});
    },
    validarForm : function() {

        var validaCampos =  $(function() {//esto permite convertir todo el validate en una funcion

            $('.hasDatepicker').datetimepicker({
                format: 'DD-MM-YYYY'
            });

            $('[data-toggle="popover"]').popover({placement: "left", animation:'pop', trigger: "hover"});

            $("#formAgregarActivo").validate({
                event: "blur",
                rules: {
                    inptTiposActivos: {
                        required: true
                    },
                    inptAsignacion : {
                        required : true
                    },
                    inptCategoria: {
                        required: true
                    },
                    inptSubCategoria : {
                        required : true
                    },
                    inptEstadoFisico : {
                        required : true
                    },
                    inptProveedor : {
                        required : true
                    },
                    inptMarca: {
                        required: true
                    },
                    inptModelo : {
                        required : true
                    },
                    inptSerie : {
                        required : true
                    },
                    inptCoBarras : {
                        required : true
                    },
                    inptFactura : {
                        required : true
                    },
                    inptFechaCompra : {
                        required : true
                    },
                    areaDesActivo : {
                        required : true
                    },
                    inptUsuario : {
                        required : true
                    },
                    inptIdSucursal : {
                        required : true
                    },
                    areaDesUbicacion : {
                        required : true
                    }
                },
                messages: {
                    inptTiposActivos: {
                        required: "Este campo es obligatorio.",
                    },
                    inptAsignacion: {
                        required: "Este campo es obligatorio.",
                    },
                    inptSubCategoria: {
                        required: "Este campo es obligatorio.",
                    },
                    inptAsignacion: {
                        required: "Este campo es obligatorio.",
                    },
                    inptEstadoFisico : {
                        required : "Este campo es obligatorio."
                    },
                    inptProveedor : {
                        required : "Este campo es obligatorio."
                    },
                    inptMarca: {
                        required: "Este campo es obligatorio.",
                    },
                    inptModelo: {
                        required: "Este campo es obligatorio.",
                    },
                    inptSerie: {
                        required: "Este campo es obligatorio.",
                    },
                    inptCoBarras: {
                        required: "Este campo es obligatorio.",
                    },
                    inptFactura: {
                        required: "Este campo es obligatorio.",
                    },
                    inptFechaCompra: {
                        required: "Este campo es obligatorio.",
                    },
                    areaDesActivo: {
                        required: "Este campo es obligatorio.",
                    },
                    inptUsuario: {
                        required: "Este campo es obligatorio.",
                    },
                    inptIdSucursal: {
                        required: "Este campo es obligatorio.",
                    },
                    areaDesUbicacion: {
                        required: "Este campo es obligatorio.",
                    }
                }
                ,debug: true
                ,errorElement: "label"
                ,submitHandler: function(form){
                    var datosForm  = $("#formAgregarActivo").serializeArray();
                    console.log(datosForm);
                    $.ajax({
                        type: "POST",
                        url: procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/insertar-activo',
                        processData: true,
                        data: datosForm,
                        success: function(data){
                            procesoLitsActivoMain.metodoMensaje(data);
                        }
                    });
                },
                errorPlacement: function (error, element) {
                    error.insertBefore(element.parent().next('div').children().first());
                },
                highlight: function (element) {
                    $(element).parent().next('div').show();
                    $(element).parent().next('div').addClass( "error" );
                    $(element).parent().find('span').addClass('glyphicon-red');
                },
                unhighlight: function (element) {
                    $(element).parent().next('div').hide();
                    $(element).parent().find('span').removeClass('glyphicon-red');

                }

            });//fin del validate
        });//Esto permite transformar el validate en una funcion y encapsularla en la clase
    },
    metodoMensaje : function(data) {

        var result = JSON.parse(data);

        if(result['result'] == 1){
            var str = '<div class="alert alert-success"> <span class="glyphicon glyphicon-ok"></span> <span> i_mensaje</span> </div>';
            var respHtml = str.replace("i_mensaje", result['msj']);

            $(".msjRespuesta").html(respHtml);
            $("#btnGuardar").attr('disabled', 'disable');
        }
        if(result['result'] == 0){
            console.log("entro");

            var str = '<div class="alert alert-danger"> <span class="glyphicon glyphicon-remove"></span> <span> i_mensaje</span> </div>';
            var respHtml = str.replace("i_mensaje", result['msj']);
            $(".msjRespuesta").html(respHtml);
        }

        $( "#btnCerrar" ).on( "click", function() {
            window.location.reload(true);
        });

    },
    validaTeclado : function() {

        var validaCamposTeclado =  $(function() {
            $(".soloLetras").keypress(function(e)   { procesoLitsActivoMain.metodoTeclado(e, "nombre", this); });
        });

    },
    metodoTeclado : function(e, permitidos, fieldObj, upperCase) {

        if(fieldObj.readOnly) return false;
        upperCase = typeof(upperCase) != 'undefined' ? upperCase : true;
        e=e||event;

        charCode = e.keyCode; // || e.keyCode;

        if( (procesoLitsActivoMain.is_nonChar(charCode)) && e.shiftKey == 0 )
            return true;
        else
        if(charCode == '')
            charCode = e.charCode;

        if (fieldObj.value.length == fieldObj.maxLength) return false;

        var caracter = String.fromCharCode(charCode);

        // Variables que definen los caracteres permitidos
        var numeros 		= "0123456789";
        var caracteres		= "  abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ";
        var car_especiales	= ".-_()'\"/&";


        //Los valores de las llaves del array representan los posibles valores permitidos
        var selectArray = new Array();
        selectArray['all']		= '';
        selectArray['num']		= numeros;
        selectArray['nombre']	= caracteres;


        // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
        if ((selectArray[permitidos].indexOf(caracter) != -1) || (permitidos == 'all')){
            return(true);
        }
        else{
            if(e.preventDefault)
                e.preventDefault();
            else
                e.returnValue = false;
        }
    },
    is_nonChar : function(charCode) {

        // 8 = BackSpace, 9 = tabulador, 13 = enter, 35 = fin, 36 = inicio, 37 = flecha izquierda, 38 = flecha arriba,
        // 39 = flecha derecha, 37 = flecha izquierda, 40 = flecha abajo 46 = delete.

        var teclas_especiales = [8, 9, 13, 35, 36, 37, 38, 39, 40, 46];
        if ($.browser.msie) {
            return(false);
        }
        for(var i in teclas_especiales) {

            if(charCode == teclas_especiales[i]) {
                return(true);
            }
        }
    },
    metodoSelect: function (url, idSelect, valores ) {
        $.ajax({
            type: "POST",
            url: url,
            data:'valor='+valores,
            beforeSend: function(datos){
                $("#"+idSelect).html('<option value = ""> Cargando... </option>');
            },
            success: function(datos){
                $("#"+idSelect).html(datos);
            },
            error: function(datos,falla, otroobj){
                $("#"+idSelect).html('<option value = ""> Error... </option>');
            }
        });
    },
    metodoChangeSelect:function(idSelect, url, idSelectChange) {

        var ActualizaSelect = $(function () {//esto permite usar los elementos Jquery en este metodo por ejemplo el change

            $( "#"+idSelect ).on( "change", function() {
                var selectCategoria = $("#"+idSelect+" option:selected").val();
                procesoLitsActivoMain.metodoSelect(url, idSelectChange, selectCategoria);
            });

        });
    },
    confirmaEliminar:  function (){
        $( document ).on("click", ".btnEliminaAccionActivo",  function () {
            var id = $(this).data("activo");
            procesoLitsActivoMain.modalMensaje('Confirmación','¿ Está seguro de eliminar este registro ?', id, 'eliminar');

        });
    },
    modalMensaje:function (titulo1, mensaje, valor, proceso) {

        BootstrapDialog.show({
            title: titulo1,
            message: mensaje,
            cssClass:'prueba',
            type:'type-danger',
            size:'size-normal',
            closable:true,
            spinicon:'glyphicon glyphicon-eur',
            buttons: [{
                id: 'btn-remove',
                icon: 'glyphicon glyphicon-remove',
                label: 'No',
                cssClass: 'btn-danger',
                action: function(dialog) {
                    dialog.close();
                }
            }, {
                id: 'btn-ok',
                icon: 'glyphicon glyphicon-check',
                label: 'Si',
                cssClass: 'btn-info',
                autospin: false,
                action: function(dialog){
                    procesoLitsActivoMain.procesoLogico(proceso, valor);
                    dialog.close();

                }
            }]
        });

    },
    procesoLogico:  function (proceso, valor){

        switch(proceso) {
            case 'eliminar':
                procesoLitsActivoMain.procesoEliminar(valor);
                break;
            case 'editar':

                break;
            default:
                alert("Fuera del Caso");
        }

    },
    procesoEliminar:  function (valor){
        $.ajax({
            type: "POST",
            url: procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/delete-activo-main',
            processData: true,
            data: "inpIdActivo="+valor,
            success: function (data) {
                var result = JSON.parse(data);
                // console.log("result"+result['result']);
                if (result['result'] != 1) {
                    var str = '<div class="alert alert-warning"> <span class="glyphicon glyphicon-flag"></span> <span> i_mensaje</span> </div>';
                    var respHtml = str.replace("i_mensaje", result['msj']);
                    $("#msjGeneral").html(respHtml);
                }else{
                    window.location.reload(true);
                }
            }
        });
    },

    obtenerDatos:  function (){
        $( document ).on("click", ".btnEditaAccionActivo",  function () {
            //obtengo Id-estatus para obtener la información
            var id = $(this).data("activo");
            //Modifico la interfaz para presentar la Información
            $("#inptProceso").val('Editar');
            $("#spTitulomodal").html('Editar');
            $("#bntTitulomodal").html('Editar');

            $( "#btnCerrar" ).on( "click", function() {
                window.location.reload(true);
            });

            $.ajax({
                type: "POST",
                url: procesoLitsActivoMain.pathServidor + 'activos/public/controlactivos/index/obtener-activo-main-id',
                processData: true,
                data: "inpIdSubCategoria="+id,
                success: function (data) {
                    //Realizo el Parse
                    var result = JSON.parse(data);
                    //almaceno Variables
                    $("#inpId").val(result[0].ID_ACTSUBCATEGORIA);
                    $("#inpNombre").val(result[0].NOM_SUBCATEGORIA);
                    $("#inpDescripcion").val(result[0].DESC_SUBCATEGORIA);
                    $("#inpReferencia").val(result[0].REFERENCIA);
                }
            });


        });
    },


};

procesoLitsActivoMain.init();


