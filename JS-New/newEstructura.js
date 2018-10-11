var TemplateTaskActivities = {
				//Variables
				MesajeSaludo:'HelloWord',
				init : ()=> {
				//Inicializando
					TemplateTaskActivities.sayMessage(TemplateTaskActivities.MesajeSaludo);
					TemplateTaskActivities.changeCustomers();
				},
				// Metodos
				sayMessage: (mensaje)=> {
					alert(mensaje);
				},
				changeCustomers:()=>{
					   $(document).on("change", "#customers", ()=> {

							if($("#customers").val()!=0){

			                    TemplateTaskActivities.clean_form_input("#product");
			                    TemplateTaskActivities.form_select_default("#product");
			                    TemplateTaskActivities.clean_form_input("#project");
			                    TemplateTaskActivities.form_select_default("#project");
			                    theme_url='{!! url('admin/bulletin/ajaxproductSearch/') !!}';
			                    url_complete=theme_url+'/'+$("#customers").val();

			                    TemplateTaskActivities.view_only_simple(url_complete,"#product",id=null,2);

		                    }else{

			                    TemplateTaskActivities.clean_form_input("#product");
			                    TemplateTaskActivities.form_select_default("#product");
			                    TemplateTaskActivities.clean_form_input("#project");
			                    TemplateTaskActivities.form_select_default("#project");

		                    }


			        });
				},
				clean_form_input:(destiny)=>{
					$(destiny).empty();
				},
				form_option_append:(destiny,index,value)=>{
					$(destiny).append('<option value='+index+'>'+ value+' </option>' );
				},
				form_option_disable:(value,boleano)=>{
					$(value).prop('disabled', boleano);
				},
				form_select_default:(destiny)=>{
					$(destiny).prepend('<option value="" selected>Selecionar</option>');
				},
				view_only_simple:(vurl,destiny,id=null)=>{
					 token='{{csrf_token()}}';
				        //console.log(vurl);
				         $.ajax({
				              type: 'GET',
				              url: vurl,
				              data: {'id': id },
				              dataType: 'JSON',
				              headers:{'X-CSRF-TOKEN': token},
				         })
				         .done(( data, textStatus, jqXHR)=> {
				         	 //console.log(data);
				             TemplateTaskActivities.clean_form_input(destiny);
			        		 TemplateTaskActivities.form_select_default(destiny);

				            $.each( data, ( index, value )=> {
				           		TemplateTaskActivities.form_option_append(destiny,index,value)
				            });

				         })
				         .fail(( data, textStatus, jqXHR)=> {
				           //console.log(data);
				         }) ;
				}

		};