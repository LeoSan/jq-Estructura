/**
 * Created by ljcuenca on 02/08/2017.
 */

var procesoCatalogoMotivo = {
    //Declaracion Variables
    numEmpleado : 'Hola',
    pathServidor: 'http://10.73.98.127/',
    //Metodo Inicial
    init : function() {
        procesoCatalogoMotivo.renderGrid();
        procesoCatalogoMotivo.validarForm();
        procesoCatalogoMotivo.validaTeclado();
        procesoCatalogoMotivo.confirmaEliminar();
        procesoCatalogoMotivo.obtenerDatos();

    },// fin init
    renderGrid : function() {
        var alto = $(document).height();
        var ancho = $(document).width();
        var grid = $('#jqGridCataMotivo').jqGrid({
            url:  procesoCatalogoMotivo.pathServidor  + 'activos/public/controlactivos/index/obtener-json-motivo',
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
            height: 250,
            ignoreCase: true,
//             ondblClickRow: function (rowId) {
//                 Archivo.showLoading();
// //				var rowData = $(this).getRowData(rowId);
// //				ConsultaInventario.renderElementDetail(rowData['IDDOCTO'],rowData['CREDITO']);
//             },
            colModel: [
                { label: 'Id', name: 'ID_ACTMOTIVOSOL', key: true, width: 75 },
                { label: 'Nombre ', name: 'NOM_MOTIVO', width: 70 },
                { label: 'Descripción', name: 'DESC_MOTIVO', width: 70 },
                { label: 'Acción', name: 'ACCION', width: 20 },
            ],
            viewrecords: true,
            rowNum: 20,
            pager: "#jqGridPagerCataMotivo",
            sortorder: "asc",
        });
        $('#jqGridCataMotivo').jqGrid('filterToolbar',{searchOperators: true, stringResult: true, searchOnEnter: false});
        // $('#jqGridCataSubCateforia').jqGrid('navGrid','#jqGridPagerCataSubCateforia',{edit:true,add:true,del:true});
    },
    validarForm : function() {

        var validaCampos =  $(function() {//esto permite convertir todo el validate en una funcion
            $("#formMotivo").validate({
                event: "blur",
                rules: {
                    inpNombre: {
                        required: true
                    },
                    inpDescripcion : {
                        required : true
                    },
                },
                messages: {
                    inpNombre: {
                        required: "Este campo es obligatorio.",
                    },
                    inpDescripcion: {
                        required: "Este campo es obligatorio.",
                    },
                }
                ,debug: true
                ,errorElement: "label"
                ,submitHandler: function(form){
                    var datosForm  = $("#formMotivo").serializeArray();
                    $.ajax({
                        type: "POST",
                        url: procesoCatalogoMotivo.pathServidor + 'activos/public/controlactivos/index/insertar-editar-motivo',
                        processData: true,
                        data: datosForm,
                        success: function(data){
                            procesoCatalogoMotivo.metodoMensaje(data);
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

            })//fin del validate
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
            $(".soloLetras").keypress(function(e)   { procesoCatalogoMotivo.metodoTeclado(e, "nombre", this); });

        });

    },
    metodoTeclado : function(e, permitidos, fieldObj, upperCase) {

        if(fieldObj.readOnly) return false;
        upperCase = typeof(upperCase) != 'undefined' ? upperCase : true;
        e=e||event;

        charCode = e.keyCode; // || e.keyCode;

        if( (procesoCatalogoMotivo.is_nonChar(charCode)) && e.shiftKey == 0 )
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
    confirmaEliminar:  function (){
        $( document ).on("click", ".btnEliminaAccionMotivo",  function () {
            var id = $(this).data("motivo");
            procesoCatalogoMotivo.modalMensaje('Confirmación','¿ Está seguro de eliminar este registro ?', id, 'eliminar');

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
                    procesoCatalogoMotivo.procesoLogico(proceso, valor);
                    dialog.close();

                }
            }]
        });

    },
    procesoLogico:  function (proceso, valor){

        switch(proceso) {
            case 'eliminar':
                procesoCatalogoMotivo.procesoEliminar(valor);
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
            url: procesoCatalogoMotivo.pathServidor + 'activos/public/controlactivos/index/delete-motivo',
            processData: true,
            data: "inpIdMotivo="+valor,
            success: function (data) {

                var result = JSON.parse(data);

                console.log("result"+result['result']);

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
        $( document ).on("click", ".btnEditaAccionMotivo",  function () {
            //obtengo Id-estatus para obtener la información
            var id = $(this).data("motivo");
            //Modifico la interfaz para presentar la Información
            $("#inptProceso").val('Editar');
            $("#spTitulomodal").html('Editar');
            $("#bntTitulomodal").html('Editar');

            $( "#btnCerrar" ).on( "click", function() {
                window.location.reload(true);
            });

            $.ajax({
                type: "POST",
                url: procesoCatalogoMotivo.pathServidor + 'activos/public/controlactivos/index/obtener-motivo-id',
                processData: true,
                data: "inpIdMotivo="+id,
                success: function (data) {
                    //Realizo el Parse
                    var result = JSON.parse(data);
                    //almaceno Variables
                    $("#inpId").val(result[0].ID_ACTMOTIVOSOL);
                    $("#inpNombre").val(result[0].NOM_MOTIVO);
                    $("#inpDescripcion").val(result[0].DESC_MOTIVO);
                    $("#inpReferencia").val(result[0].REFERENCIA);
                }
            });


        });
    },

};

procesoCatalogoMotivo.init();


