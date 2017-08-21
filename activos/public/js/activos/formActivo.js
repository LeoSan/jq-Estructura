/**
 * Created by ljcuenca on 08/08/2017.
 */

$(document).ready(function(){

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
            //$(form).ajaxSubmit();
            alert("envio");

//                $.ajax({
//                    type: "POST",
//                    url:"envio.php",
//                    contentType: "application/x-www-form-urlencoded",
//                    processData: true,
//                    data: "nombre="+escape($('#ContactName').val())+"&email="+escape($('#ContactRecipient').val())+"&mensaje="+escape($('#ContactMessage').val()),
//                    success: function(msg){
//                        setTimeout(function() {$('#mensaje').fadeOut('fast');}, 3000);
//
//                    }
//                });


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

    });


    $( "#btnLeonard" ).on( "click", function() {

        modalMensaje('leo1', 'Memnsaje eo ', 'leo2', 'leo3');
        //cargaModal();

    });



});


var procesoFormularioActivo = {
    //Declaracion Variables
    numEmpleado : 'Hola',
    pathServidor : 'http://10.73.98.127/',
    //Metodo Inicial
    init : function() {
        procesoFormularioActivo.renderGrid();

    },// fin init
    renderGrid : function() {
      //alert("hola mundo");
    },
    renderPopMsj : function() {
      //alert("hola mundo");
    },

};

// procesoFormularioActivo.init();


function modalMensaje(titulo1, mensaje, label1, titulo2){

    BootstrapDialog.show({
        title: titulo1,
        message: mensaje,
        cssClass:'prueba',
        type:'type-warning',
        size:'size-wide',
        closable:true,
        spinicon:'glyphicon glyphicon-eur',
        buttons: [{
            label: label1,
            action: function(dialog) {
                dialog.setTitle('Title 1');
            }
        }, {
            label: titulo2,
            action: function(dialog) {
                dialog.setTitle('Title 2');
            }
        }, {
            id: 'btn-ok',
            icon: 'glyphicon glyphicon-check',
            label: 'OK',
            cssClass: 'btn-info',
            data: {
                js: 'btn-confirm',
                'user-id': '3'
            },
            autospin: false,
            action: function(dialogRef){
                dialogRef.close();
            }
        }]
    });

}



