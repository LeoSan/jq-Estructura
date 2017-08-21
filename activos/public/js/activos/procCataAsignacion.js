/**
 * Created by ljcuenca on 08/08/2017.
 */

var procesoCatalogoTipoAsignacion = {
    //Declaracion Variables
    numEmpleado : 'Hola',
    pathServidor : 'http://10.73.98.127/',
    //Metodo Inicial
    init : function() {
        procesoCatalogoTipoAsignacion.renderGrid();
        procesoCatalogoTipoAsignacion.validarForm();
        procesoCatalogoTipoAsignacion.validaTeclado()
    },// fin init
    renderGrid : function() {
        var alto = $(document).height();
        var ancho = $(document).width();
        var grid = $('#jqGridCataAsignacion').jqGrid({
            url: procesoCatalogoTipoAsignacion.pathServidor + 'activos/public/controlactivos/index/obtener-json-tipo-asignacion',
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
                { label: 'ID', name: 'ID_TIPO_ASIGNACION', key: true, width: 75 },
                { label: 'Nombre', name: 'NOM_TIPO_ASIGNACION', width: 150 },
                { label: 'Referencia', name: 'REFERENCIA', width: 150 },
                { label: 'Acción', name: 'ACCION', width: 150 },
            ],
            viewrecords: true,
            rowNum: 20,
            pager: "#jqGridPagerCataAsignacion",
            sortorder: "asc",
        });
        $('#jqGridCataAsignacion').jqGrid('filterToolbar',{searchOperators: true, stringResult: true, searchOnEnter: false});
        // $('#jqGridCataAsignacion').jqGrid('navGrid','#jqGridPagerCataAsignacion',{edit:true,add:true,del:true});
    },
    validarForm : function() {

        var validaCampos =  $(function() {//esto permite convertir todo el validate en una funcion
            $("#formAgregarAsignacion").validate({
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
                    var datosForm  = $("#formAgregarAsignacion").serializeArray();
                    $.ajax({
                        type: "POST",
                        url: procesoCatalogoTipoAsignacion.pathServidor + 'activos/public/controlactivos/index/insertar-asignacion',
                        processData: true,
                        data: datosForm,
                        success: function(data){
                            procesoCatalogoTipoAsignacion.metodoMensaje(data);
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

        $( "#btnCerar" ).on( "click", function() {
            window.location.reload(true);
        });

    },
    validaTeclado : function() {

        var validaCamposTeclado =  $(function() {
            $(".soloLetras").keypress(function(e)   { procesoCatalogoTipoAsignacion.metodoTeclado(e, "nombre", this); });

        });

    },
    metodoTeclado : function(e, permitidos, fieldObj, upperCase) {

        if(fieldObj.readOnly) return false;
        upperCase = typeof(upperCase) != 'undefined' ? upperCase : true;
        e=e||event;

        charCode = e.keyCode; // || e.keyCode;

        if( (procesoCatalogoTipoAsignacion.is_nonChar(charCode)) && e.shiftKey == 0 )
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


};

procesoCatalogoTipoAsignacion.init();


