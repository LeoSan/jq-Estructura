var ComprobacionPantallaFactura = {

    init : function() {

        ComprobacionPantallaFactura.renderGrid();
        ComprobacionPantallaFactura.msjActivador();
        ComprobacionPantallaFactura.activamodal();

        $("#btnCargarXML").click(function(e){
            var formData = new FormData();
            formData.append('file_xml', $('#file_xml')[0].files[0]);
            var url = baseUrl + '/gastos/comprobacionfactura/uploadfile';
            $.ajax({
                url: url,
                type: 'POST',
                data: formData, //el data es tu objeto formData
                processData: false, //indicas a jQuery que no procese la información
                contentType: false //indicas a jQuery que no configure el contentType del request
            }).done(function(data) {
                    data = $.parseJSON(data);
                    if ( data.success == 'false' ) {
                        $("#divMsjXML").show();
                        $("#msj_xml").html(data.msg);
                    }
                    if ( data.success == 'true' ) {

                        $(".sr-only").html('Exito:')
                        $(".divMsjXML").addClass('alert alert-success');
                        $("#divMsjXML").show();
                        $("#msj_xml").html(data.msg);
                    }
                }).fail(function() {
                    console.log("error");
                })

        });

        $("#btnSearch").click(function(e){
            e.preventDefault();
            $("#modalBusqueda").modal('show');
        });

    },
    renderGrid : function() {
        console.log('baseUrl :' + baseUrl);
        var pantalla = 'reporteplanviaje';
        var idUser = $("#idsolicitante").html();
        var detalle = '0';
        var grid = $('#jqGridList').jqGrid({
          //  url: baseUrl + '/planesdeviaje/reportes/get-reporte-plan-viaje',
            datatype: 'json',
            postData: {
                pantalla     : pantalla,
                idSol        : idUser,
                detalle      : detalle
            },
            autowidth: true,
            //shrinkToFit: true,
            height: 200,
            // height: alto - 240,
            ignoreCase: true,
            ondblClickRow: function (rowId) {
                // Archivo.showLoading();
//				var rowData = $(this).getRowData(rowId);
//				ConsultaInventario.renderElementDetail(rowData['IDDOCTO'],rowData['CREDITO']);
            },
            colNames:[
                'Sistema',
                'Caso',
                'Cuenta',
                'Concepto',
                'Fecha de registro',
                'Solicitante',
                'Fecha inicio',
                'Fecha fin',
                'Estado',
                'Tipo de movimiento'
            ],
            colModel: [
                { index: 'TIPO',          name: 'TIPO',          width: 60, searchoptions: { sopt: ["cn","eq"] } },
                { index: 'CASO',          name: 'CASO',          width: 30, searchoptions: { sopt: ["cn","eq"] }, align: "right", sorttype: "number" },
                { index: 'CREDITO',       name: 'CREDITO',       width: 70, searchoptions: { sopt: ["cn","eq"] } },
                { index: 'CONCEPTO',      name: 'CONCEPTO',      searchoptions: { sopt: ["cn","eq"] } },
                { index: 'FDFECREGISTRO', name: 'FDFECREGISTRO', width: 60, searchoptions: { sopt: ["cn","eq"] } },
                { index: 'NMSOLICITANTE', name: 'NMSOLICITANTE', searchoptions: { sopt: ["cn","eq"] } },
                { index: 'FDFECINI',      name: 'FDFECINI',      width: 60, searchoptions: { sopt: ["cn","eq"] } },
                { index: 'FDFECFIN',      name: 'FDFECFIN',      width: 60, searchoptions: { sopt: ["cn","eq"] } },
                { index: 'FCSTATUSLABEL', name: 'FCSTATUSLABEL', width: 60, searchoptions: { sopt: ["cn","eq"] } },
                { index: 'TIPOMOVLABEL',  name: 'TIPOMOVLABEL',  width: 70, searchoptions: { sopt: ["cn","eq"] } }
            ],
            rowNum: 200,
            loadonce: false,
            altRows: true,
            mtype: 'POST',
            gridview: false,
            pager: '#jqGridPagerList',
            sortname: 'CASO',
            sortorder: 'desc',
            viewrecords: true,
            rownumbers: true,
            caption:'',
            loadtext: 'Cargando informaci&oacute;n....',
            loadBeforeSend: function(xhr, settings){
                // Archivo.showLoading();
            },
            loadComplete: function(data) { // inicio loadComplete
                Archivo.hideLoading();
            } // fin loadComplete
        });
        $('#jqGridList').jqGrid('filterToolbar',{searchOperators: true, stringResult: true, searchOnEnter: false});
    },
    msjActivador:function(){
            $("#divMsjXML").hide();
    },
    activamodal:function () {

        console.log("hola mundo");



    }

};
ComprobacionPantallaFactura.init();