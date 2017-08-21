var VacacionesIndex = {
    init : function() {

        VacacionesIndex.cargaGridVacaciones();

        var url = baseUrl + '/recursosh/index/uploadfile';

        $(document).on({
            click : function(e){
                e.preventDefault();
                var periodo = $(this).attr("id-rel");
                var p = $(this).attr("data-periodo");//periodo
                var idEmpleado = $("#numEmpleado").val();

                $.ajax({
                    url: baseUrl + '/recursosh/index/get-detallevacaciones',
                    type: "POST",
                    dataType: 'json',
                    data: {idPeriodo:periodo, idEmpleado:idEmpleado},
                    success: function(data){
                        if(data != '') {
                            console.log(data);

                            var htmldetalle = '<table class="detalleVacaciones" border="1">\n\
                            <thead><tr><th>No. solicitud</th><th>Fecha de solicitud</th><th>Motivo solicitud</th><th style="display: none">Procedencia</th><th style="display: none">Período</th><th width="65">Fecha inicio</th><th width="65">Fecha fin</th><th  style="display: none" >Días vacaciones</th><th >Días solicitados</th><th style="display: none" >Días usados</th>\n\
                           <th style="display: none" >Días disponibles</th><th>Estatus</th><th style="display: none" >Detalle</th></tr></thead>';
                            $.each(data,function(i,items){
                                htmldetalle += '<tr style="height: auto;" class='+items.STATUS+'><td><p align="center">' + items.IDCASO +'</p></td><td><p align="center">' + items.FREGISTRO+'</p></td><td><p align="center">' + items.MOTIVOV+'</p></td><td style="display: none"><p align="center">' + items.IDTAREA+'</p></td><td  style="display: none"><p align="center">'+items.PERIODO+'</p></td><td><p align="center">'+items.FECHA_INICIO+'</p></td>\n\
                            <td><p align="center">'+items.FECHA_FIN+'</p></td><td style="display: none" ><p align="center"  >'+items.NUMDIASVACACIONES+'</p></td><td style="display: none" ><p align="center" >' + items.NUMDIASSOLICITADOS+'</p></td><td ><p align="center">' + items.NUMDIASSOLICITADOS+'</p></td><td  style="display: none"><p align="center" >' + items.NUMDIASDISPONIBLES+'</p></td>\n\
                            <td><p align="center">'+items.STATUS+'</p></td><td style="display: none" ><p align="center"><button id-rel='+items.IDVACACIONES+' id='+items.STATUS+' data-periodo="' + items.PERIODO +'"  data-idempleado="' + items.IDEMPLEADO +'" type="button" class="btn btn-info btn-xs verdetallesvacaciones"  style="margin-left:19px;">Ver</button></p></td></tr>';

                            });
                            htmldetalle += '</table>';

                            $("#consulta-vacaciones").html(htmldetalle);
                            $("#myModalLabel1>span").html(p);
                            $("#modalVacaciones").css("width","900px");
                            $("#modalVacaciones").css("left","33%");
                            $('#modalVacaciones').modal("show");
                        } else {
                            alert('No existe vacaciones registrados en este período');
                        }

                    },
                });


            }
        },".detalleVacaciones");

        $(document).on({
            click : function(e){
                e.preventDefault();
                console.log("este archivo es vacaciones index");
                var periodo = $(this).attr("id-rel");//id_periodo
                var p = $(this).attr("data-periodo");//periodo
                var idEmpleado = $("#numEmpleado").val();
                var contador = 1;
                $.ajax({
                    url: baseUrl + '/recursosh/index/get-bitacora',
                    type: "POST",
                    dataType: 'json',
                    data: {idPeriodo:periodo, idEmpleado:idEmpleado, periodo:p},
                    success: function(data){
                        if(data != '') {
                            console.log(data);

                            if(status === 'CANCELADO') {  // STATUS
                                var htmlbitacora = '<table class="table table-hover" >\n\
                       <thead><tr><th>No.</th><th>Nro. caso</th><th>Tipo Movimiento </th><th>Motivo Solicitud</th><th>Solicitud procesada por</th><th>Comentario</th>  <th>Fecha de movimiento </th></tr></thead>';
                            } else {
                                var htmlbitacora = '<table class="table table-hover" >\n\
                       <thead><tr><th>No.</th><th>Nro. caso</th><th> Tipo Movimiento</th><th>Motivo Solicitud</th><th>Solicitud procesada por</th><th>Comentario</th>  <th>Fecha de movimiento</th></tr></thead>';
                            }

                            $.each(data,function(i,items){
                                htmlbitacora += '<tr class='+items.STATUS+'><td><p align="center">' + contador +'</p></td><td><p align="center">' + items.IDCASO+'</p></td><td><p align="center">' + items.MOVIMIENTO+'</p></td> <td><p align="center">' + items.MOTIVO_SOLICITUD +'</p></td><td><p align="center">' + items.QUIENPROCESA+'</p></td> <td><p align="center">'+items.COMENTARIO+'</p></td>\n\
                                  <td><p align="center">'+items.FECHA+'</p></td></tr>';
                                contador++;
                            });
                            htmlbitacora += '</table>';

                            $("#consulta-bitacora-vacaciones").html(htmlbitacora);
                            $("#myModalLabel2>span").html(p);
                            $("#modalBitacoraVacaciones").css("width","900px");
                            $("#modalBitacoraVacaciones").css("left","33%");
                            $('#modalBitacoraVacaciones').modal("show");
                        } else {
                            alert('No existe vacaciones registrados en este período');
                        }

                    },
                });


            }
        },".bitacoraVacaciones");

        $(document).on({
            click : function(e){
                e.preventDefault();

                //alert("detalles");

                var idVacaciones = $(this).attr("id-rel");
                //alert("idVacaciones" +  idVacaciones);
                var idEmpleado = $("#numEmpleado").val();

                var status = $(this).attr("id");
                //var elem = $(this).attr("id-rel")

                //console.log(idEmpleado + '-' + periodo);
                $.ajax({
                    url: baseUrl + '/recursosh/index/get-detalles',
                    type: "POST",
                    dataType: 'json',
                    data: {idVacaciones:idVacaciones, idEmpleado:idEmpleado},
                    success: function(data){
                        if(data != '') {
                            // var cadena = JSON.parse(data);
                            //var cadena = jQuery.parseJSON( data );
                            //console.log(data[0].QUIENPROCESA);
                            if(status === 'CANCELADO') {  // STATUS
                                var html = '<table class="table table-hover" >\n\
                       <thead><tr><th>Id detalle</th><th>Solicitud procesada por</th><th>Comentario</th><th>Fecha cancelación </th></tr></thead>';
                            } else {
                                var html = '<table class="table table-hover" >\n\
                       <thead><tr><th>Id detalle</th><th>Solicitud procesada por</th><th>Comentario</th><th>Fecha aprobación</th></tr></thead>';
                            }


                            $.each(data,function(i,items){
                                html += '<tr class='+items.STATUS+'><td><p align="center">' + items.IDDETALLE+'</p></td><td><p align="center">' + items.QUIENPROCESA+'</p></td> <td><p align="center">'+items.COMENTARIO+'</p></td>\n\
                                  <td><p align="center">'+items.FECHA+'</p></td></tr>';

                            });
                            html += '</table>';

                            $("#consulta-vacaciones-detalles").html(html);

                        } else {
                            var html = '<table class="table table-hover" >\n\
                       <thead><tr><th>Id detalle</th><th>Cancelado por</th><th>Motivo</th><th>Comentario</th><th>Fecha cancelacion</th></tr></thead>';
                            html += '<tr><td colspan="5">No existen detalles.</td></tr>';

                            $("#consulta-detalles-vacaciones").html(html);
                            //alert('No existe vacaciones registrados en este periodo');
                        }

                    },
                });

                $("#modalDetallesVacaciones").css("left","33%"); // width: 602px; height: 214px;
                $('#modalDetallesVacaciones').modal("show");

            }
        },".verdetallesvacaciones");

        //fin modal

        $(document).on({
            click: function(){

                var archivo = $('#uploadFileComprobante').val();

                console.log('archivo ' + archivo);

                $('#uploadFileComprobante').uploadify({
                    'swf'      : baseUrl + '/lib/uploadify/uploadify.swf',
                    'uploader' : baseUrl + '/recursosh/index/uploadfile',
                    'buttonText' : 'Examinar...',
                    'removeCompleted' : true,
                    'formData': {'solicitudid' : $("#solicitudid").val()},
                    'onUploadComplete' : function(file) {
                        //$("#archivo").val(file.name);
                        console.log('onUploadComplete el archivo ' + file.name + ' finalizó exitosamente.');
                    },
                    'onUploadSuccess' : function(file, data, response) {
                        $("#msjErrorUploadSuccess").hide();
                        $("#msjErrorUploadError").hide();
                        var cadena = JSON.parse(data);
                        if(cadena.success == 'true'){
                            $("#archivo").val(cadena['file']);
                            $("#msjErrorUploadSuccess").html('EL archivo ' + file.name + ' se cargo progresivamente');
                            $("#msjErrorUploadSuccess").show();
                            console.log('onUploadSuccess el archivo ' + file.name + ' se cargo progresivamente con respuesta ' + response + ':' + data);
                            console.log('La extension es: ' + cadena.ext);
                        } else {
                            $("#msjErrorUploadError").html(cadena.msg);
                            $("#msjErrorUploadError").show();
                            //alert(cadena.msg);
                        }
                    },
                    'onUploadStart' : function(file) {
                        $("#msjErrorUploadSuccess").hide();
                        $("#msjErrorUploadError").hide();
                    }
                    // Put your options here
                });
            }
        },"#btnUploadFile_");

//$(".selectUser_").on("change",function(){
//                            //alert($(this).val());
//                            
//                   var numEmpleado = $(this).val();
//
//                   $.ajax({
//                       url: baseUrl + '/recursosh/index/get-vacaciones',
//                       type: "POST",
//                       dataType: "json",
//                       data: {numEmpleado: numEmpleado },
//                       success: function(data){
//                           //var tabla ='<table class="table table-hover vacaciones">'; border="1"
//                           
//                                var html = '<table class="table table-hover vacaciones" ><thead><tr><th>#</th><th>1er Semestre</th><th>2do Semestre</th><th>Antiguedad</th><th>Dias por antiguedad</th><th>Dias disponibles</th><th>Dias usados</th><th>Total de dias disponibles</th><th>Accion</th></tr></thead>';
//
//		        	$.each( data, function(i, items){
//		        		html += '<tr><td>' + items[7]+'</td><td>'+items[0]+'</td><td>'+items[1]+'</td><td>'+items[2]+'</td><td>'+items[3]+'</td><td>'+items[4]+'</td><td>' + items[5]+'</td><td>' + items[6]+'</td><td>' + items[7]+'</td></tr>';
//		        	});
//                                html += '</table>';
//                                
//		        	$(".divVacaciones").html(html);
//                                
//                                $("#textFechaAlta").html(data[0][8]);
//                           
//                           console.log(data[0][8]);
//                       },
//                       error: function(r){
//                          var html = '<table class="table table-hover vacaciones" border="1"><thead><tr><th>#</th><th>1er Semestre</th><th>2do Semestre</th><th>Antiguedad</th><th>Dias disponibles</th><th>Total de dias disponibles</th><th>Accion</th></tr></thead>\n\
//                                      <tr><td colspan="7">Sin Datos.</td></tr>';
//
//                                            
//                                html += '</table>';
//                                
//		        	$(".divVacaciones").html(html);
//                       },
//                       
//                       
//                   });         
//                });

        //SoportesReasignaciones.getDataUser();
        //VacacionesIndex.getDataUser();
//                        var f1 = '01-06-2016';
//                        var f2='08-06-2016';
////                        console.log("la resta de fecha es:");
//                        
//                        VacacionesIndex.calcularFecha(f1,f2);
        //console.log(calcularFecha(f1,f2));


//            $("input=file").on("change",function(){
//                    alert($(this).val());
//                            
//                   var comprobante = $(this).val();
//
//                   $.ajax({
//                       url: baseUrl + '/recursosh/index/cargar-comprobante', //cargarComprobante
//                       type: "POST",
//                       dataType: "json",
//                       data: {comprobante: comprobante },
//                       success: function(data){
//
//                       },
//                       error: function(r){
//
//                       },
//                       
//                       
//                   });         
//                });


    },// End Init()

    // Busca el Usuario
    searchData : function() {

        $("#resultadoListaGastos").html( "" );
        Layout.showLoading();

        $.ajax({
            type: "POST",
            dataType: 'html',
            url: baseUrl + '/recursosh/index/search',
            data: {
                user: 	$.trim( $("#frmBuscarGasto select").val() ),
                folio: 	$.trim( $("#idfoliobuscar").val() ),
                prouid: $("#PROid").attr("data-pro"),
                idUser: $("#noEmpleado").html()
            },
            success: function (data) {
                Layout.hideLoading();
                $("#resultadoListaGastos").html( data );
            }
        });


    }, // End findFolio

    getDataUser : function() {
        var userid = $("#numEmpleado").val();

        $.ajax({
            type: "POST",
            dataType: 'json',

            url: baseUrl + '/recursosh/index/getdatauser',
            //url: baseUrl + '/soporte/reasignaciones/getdatauser',
            data: {
                userid: userid
            },
            success: function (data) {
                var html = '<option value=0>Seleccione un Empleado</option>';

                $.each( data, function(i, items){
                    html += '<option value="'+items.NUMEMPLEADO+'">'+items.NUMEMPLEADO+' '+items.NOMBRE+'</option>';
                });

                $("#frmBuscarGasto select").html(html);

            }
        });

    },

    cargaGridVacaciones: function(){



        var numEmpleado = $("#numEmpleado").val();

        // fechaAlta: fechaAlta ,numCaso: numCaso, emailUsu: emailUsuario, usuario: usuario

        var x = 0;
        //var nomEmpleado  = '';
        var diasVacaciones = new Array();
        var dias = 0;
        $.ajax({
            url: baseUrl + '/recursosh/index/get-vacaciones',
            type: "POST",
            dataType: "json",
            data: {numEmpleado: numEmpleado},
            success: function(data){

                //var html = '<table class="table table-hover vacaciones" align="center"><thead><tr><th>#</th><th>1er semestre</th><th>2do semestre</th><th>Antiguedad</th><th>Días de vacaciones</th><th>Días disfrutados</th><th>Días disponibles</th><th>Acción</th></tr></thead>';
                var html = '<table class="table table-hover vacaciones" align="center"><thead><tr><th>Año</th><th>Período</th><th>Inicia</th><th>Finaliza</th><th>Disponible desde</th><th>Vence</th><th>Días totales</th><th>Días generados</th><th>Días disfrutados</th><th>Días vencidos</th><th>Días disponibles</th><th>Acción</th></tr></thead>';
                var j = 1;
                // 10
                $.each( data, function(i, items){

                    if(items[10] == 1) {
                        var button ='<p align="center"><button type="button" class="btn btn-info btn-xs detalleVacaciones" id-rel='+ items[11] +' data-periodo="'+items[8]+'" >Detalles</button>' +
                            '<button type="button" class="btn btn-success btn-xs bitacoraVacaciones" id-rel='+ items[11]+' data-periodo="'+items[8]+'"  data-caso="'+items[8]+'" >Bitácora</button></p>';
                    }else {
                        var button = '';
                    }
                    // html += '<tr><td><p align="center">' + j+'</p></td><td ><p align="center">'+items[0]+'</p></td><td><p align="center">'+items[1]+'</p></td><td ><p align="center">'+items[2]+'</p></td><td ><p align="center">'+items[3]+'</p></td><td><p align="center">'+items[4]+'</p></td><td ><p align="center">' + items[5]+'</p></td><td> ' + button + ' </td></tr>';
                    html += '<tr><td><p align="center">' + items[11] +'</p></td><td ><p align="center">'+items[8]+'</p></td></td><td ><p align="center">'+items[0]+'</p></td><td><p align="center">'+items[1]+'</p></td><td ><p align="center">'+items[2]+'</p></td><td ><p align="center">'+items[3]+'</p></td><td ><p align="center">'+items[4]+'</p></td><td ><p align="center">'+items[5]+'</p></td><td><p align="center">'+items[6]+'</p></td><td ><p align="center">' + items[7]+'</p></td><td ><p align="center">' + items[9]+'</p></td><td> ' + button + ' </td></tr>';

                    diasVacaciones[i] = data[i][10];
                    j++;
                });
                html += '</table>';

                //items[6] ->Periodo
                $(".divVacaciones").html(html);
                //$("#textFechaExpiracion").html(data[0][9]);
                dias = diasVacaciones.pop();
                $("#diasDisponibles").html(dias);
                $("#diasVacaciones").html(dias);
                // array =data[i][10];

                //console.log(data);
            },
            error: function(r){
                var html = '<br><br><br><br><br><br><table class="table table-hover vacaciones" align="center"><thead><tr><th>Año</th><th>Período</th><th>Inicia</th><th>Finaliza</th><th>Disponible desde</th><th>Vence</th><th>Días totales</th><th>Días generados</th><th>Días disfrutados</th><th>Días vencidos</th><th>Días disponibles</th><th>Acción</th></tr></thead>\n\
                            <tr><td colspan="12"  style="text-align: center">Sin Datos.</td></tr>';


                html += '</table><br><br><br><br><br><br><br><br>';

                $(".divVacaciones").html(html);
            },

        });

    },//divVacaciones

};

//SoportesReasignaciones.init();
VacacionesIndex.init();


function muestraMensage(){
    alert("Hola Mundo");
}

// muestraMensage();

function showUser() {
    //alert('showUser');

    var fecha1 = document.getElementById('fecha1').value;
    var fecha2 = document.getElementById('fecha2').value;

    var formData = new FormData();
    formData.append("fecha1", fecha1);
    formData.append("fecha2", fecha2);

    //var vars = "fecha1="+fecha1+"&fecha2="+fecha2;
    //xmlhttp.open("POST","/gastosfact/public/recursosh/index/get-fechas");
    //var params = "fecha1="+fecha1+"&fecha2="+fecha2;
    //var params = "fecha1="+fecha1;
    //alert('fecha1 ' + fecha1 + ' Fecha2 ' + fecha2);
    if (fecha1 == "" || fecha2 == "") {
        document.getElementById("txtHint").innerHTML = "No se enviaron los datos";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
                if(xmlhttp.responseText == "1") {
                    console.log(xmlhttp.responseText);
                    //alert(true);
                } else {
                    console.log('no hay datos');
                    //alert(false);
                }

            }
        };
        //xmlhttp.open("GET","/gastosfact/public/recursosh/index/get-fechas/fecha1/"+fecha1+"/fecha2/"+fecha2,true);
        //xmlhttp.send();

        xmlhttp.open("POST","/gastosfact/public/recursosh/index/get-fechas");
        xmlhttp.send(formData);// vars
        //xmlhttp.send(vars);// vars
    }
}

function validarDiasFeriados(){
    //var diasFeriado = new 
    var diasFestivos = new Array('12-07-2016','13-07-2016','19-07-2016','20-07-2016');

    var fechaInicio = '11/07/2016';
    var fechaFin = '25/07/2016';

    var aFecha1 = fechaInicio.split('/');
    var aFecha2 = fechaFin.split('/');

    console.log('aFecha1 ' + aFecha1 + ' aFecha2 '  + aFecha2);

    //var laboraSabado = getField('jornadaSabado').value;
    //var laboraDomingo = getField('jornadaDomingo').value;

    var laboraSabado = 1;
    var laboraDomingo = 0;

    var fecha1= new Date(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
    var fecha2= new Date(aFecha2[2],aFecha2[1]-1,aFecha2[0]);


    if(fecha1 > fecha2)
    {
        alert("La fecha Fin tiene que ser mayor a la fecha de Inicio");
    } else {
        //validarFecha();
        //validarFecha( f1 );
        //console.log('validarFecha( fechaFin) ' + validarFecha( fechaFin));
        var dif = fecha2 - fecha1;
        var campoNumDias = Math.floor(dif / (1000 * 60 * 60 * 24));
        var contarSabados = 0;
        var contarDomingos = 0;

        var sabado = 6;
        var domingo = 0;
        var i = 0;

        var listaFechas = new Array();
        var contarFeriados = 0;
        //var i = 0;
        while(fecha1 <= fecha2)
        {

            if(fecha1.getDay() === domingo )
            {
                contarDomingos++;
            }
            if(fecha1.getDay() === sabado )
            {
                contarSabados++;
            }
            listaFechas[i] = fecha1.getDate()+ '-' + fecha1.getMonth()+ '-' + fecha1.getFullYear();

            for( j in diasFestivos) {
                var fechasFeriadas = diasFestivos[j].split('-');
                var feriado = new Date(fechasFeriadas[2],fechasFeriadas[1]-1,fechasFeriadas[0]);
                console.log('Dia Feriado: ' + feriado + ' Rango Fecha: ' + fecha1);
                if(feriado.getTime() === fecha1.getTime()) {
                    contarFeriados++;
                    console.log("Es igual:");
                }

            }

            fecha1.setDate(fecha1.getDate()+parseInt(1));
            i++;

        }

        var dias = 0;
        var totalDias  = 0;

        if(laboraSabado != 1)
        {
            totalDias = contarSabados;
        }
        if(laboraDomingo != 1)
        {
            dias = contarDomingos;
        }



        var sumDias = totalDias + dias + contarFeriados;
        //console.log('Suma los dos fines ' + sumDias);
        var sum = campoNumDias - sumDias;
        var diasTotales = sum + 1;

        //console.log(sum);

        //getField("numDias").value = sum + 1;

        var total = sum + 1;
        console.log('Dias totales ' + total);
        console.log(' listaFechas ' + listaFechas);
        //contarFeriados
        console.log('Total Dias Feriados ' + contarFeriados);
    }
}
