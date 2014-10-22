(function(){
	$(document).ready(function(){


		$('#head1').click(function(){
			$('.subcontenido1').slideToggle('slow');
		});

		$('#head2').click(function(){
			$('.subcontenido2').slideToggle('slow');
		});

		$('#head3').click(function(){
			$('.subcontenido3').slideToggle('slow');
		});

		var contadorError1 = 0;
		var enunciadoError1 = "";
		var contadorError2 = 0;
		var enunciadoError2 = "";
		var contadorError3 = 0;
		var enunciadoError3 = "";
		
		$('#registrar1').click(function(){

			$('#ncontrol1').css('border-color','#ccc');
			$('#nimpresiones').css('border-color','#ccc');
			$('#atendedor1').css('border-color','#ccc');
			$('#head1').removeClass('alert-danger').addClass('alert-info');
			contadorError1 = 0;
			enunciadoError1 = "";

			var datos =
			{
				ncontrol	: 	$('#ncontrol1') .val(),
				nimpresiones: 	$('#nimpresiones').val(),
				atendedor 	: 	$('#atendedor1').val()
			};
			
			datos.atendedor || formularioImpresiones.errorAtendedor();
			((datos.nimpresiones.length <= 0) || (isNaN(datos.nimpresiones))) && formularioImpresiones.errorNimpresiones();

			var parametros =
			{
				url		: 'php/alumnos.php',
				type	: 'POST',
				async	: false,
				data	: datos
			};

			$.ajax(parametros)
			.done(function(e){
				(e == "Noencontrado") && formularioImpresiones.errorControl();
			}).
			fail(function(){
			});

			formularioImpresiones.mostrar(datos);

		});
		
		$('#registrar2').click(function(){

			$('#ncontrol2').css('border-color','#ccc');
			$('#atendedor2').css('border-color','#ccc');
			$('#head2').removeClass('alert-danger').addClass('alert-info');
			contadorError2 = 0;
			enunciadoError2 = "";

			var datos =
			{
				ncontrol 	: 	$('#ncontrol2').val(),
				atendedor 	: 	$('#atendedor2').val()
			};

			datos.atendedor || formularioRed.errorAtendedor();

			var parametros =
			{
				url		: 'php/alumnos.php',
				type	: 'POST',
				async	: false,
				data	: datos
			};

			$.ajax(parametros)
			.done(function(e){
				(e == "Noencontrado") && formularioRed.errorControl();
			}).
			fail(function(){
			});

			formularioRed.mostrar(datos);

		});
		
		$('#registrar3').click(function(){

			$('#ncontrol3').css('border-color','#ccc');
			$('#correo').css('border-color','#ccc');
			$('#telefono').css('border-color','#ccc');
			$('#actividad').css('border-color','#ccc');
			$('#diagnostico').css('border-color','#ccc');
			$('#atendedor3').css('border-color','#ccc');
			$('#head3').removeClass('alert-danger').addClass('alert-info');
			contadorError3 = 0;
			enunciadoError3 = "";

			var datos =
			{
				ncontrol 	: 	$('#ncontrol3').val(),
				correo 		: 	$('#correo').val(),
				telefono 	: 	$('#telefono').val(),
				actividad 	: 	$('#actividad').val(),
				diagnostico : 	$('#diagnostico').val(),
				atendedor 	: 	$('#atendedor3').val()
			};

			var parametros =
			{
				url		: 'php/alumnos.php',
				type	: 'POST',
				async	: false,
				data	: datos
			};

			$.ajax(parametros)
			.done(function(e){
				(e == "Noencontrado") && formularioSoporte.errorControl();
			}).
			fail(function(){
			});

			!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(datos.correo)) && formularioSoporte.errorCorrero();
			(isNaN(datos.telefono) || datos.telefono.length == 0) && formularioSoporte.erroTelefono();
			datos.actividad.length == 0 && formularioSoporte.errorActividad();
			datos.diagnostico.length == 0 && formularioSoporte.errorDiagnostico();
			datos.atendedor || formularioSoporte.errorAtendedor();
			formularioSoporte.mostrar(datos);

		});


		var formularioImpresiones =
		{
			error: function(id, enun)
			{
				$('#head1').removeClass('alert-info').addClass('alert-danger');
				$(id).css('border-color','red');
				contadorError1++;
				enunciadoError1 += enun;
			},

			errorAtendedor: function()
			{
				this.error('#atendedor1', 'Atendido por, ');
			},

			errorNimpresiones: function()
			{
				this.error('#nimpresiones', 'N° impresiones, ');
			},

			errorControl: function()
			{
				this.error('#ncontrol1', 'N° control, ');
			},

			mostrar: function(datos)
			{
				if(contadorError1 > 0)
				{
					var texto = '<strong>IMPRESIONES</strong> verifique los campos de  <strong>'+enunciadoError1+'</strong>';
					$('#head1').html(texto);
				}
				else
				{
					$('#head1').html('<strong>IMPRESIONES</strong>');
					this.insertar(datos);
				}
			},

			insertar: function(datos)
			{
				var parametros =
				{
					url 		: 	'php/insertimpresiones.php',
					async 		: 	true,
					data 		: 	datos,
					type 		:   'POST'
				};

				$.ajax(parametros);
				
				$('#ncontrol1') .val('');
				$('#nimpresiones').val('');
				$('#atendedor1').val('Atendido por');
				$('#myModal').modal('show');
			}
		};

		var formularioRed = 
		{
			error: function(id, enun)
			{
				$('#head2').removeClass('alert-info').addClass('alert-danger');
				$(id).css('border-color','red');
				contadorError2++;
				enunciadoError2 += enun;
			},

			errorAtendedor: function()
			{
				this.error('#atendedor2', 'atendido por, ');
			},

			errorControl: function()
			{
				this.error('#ncontrol2', 'N° control, ');
			},

			mostrar: function(datos)
			{
				if(contadorError2 > 0)
				{
					var texto = '<strong>CABLES DE RED</strong> verifique los campos de  <strong>'+enunciadoError2+'</strong>';
					$('#head2').html(texto);
				}
				else
				{
					$('#head2').html('<strong>CABLES DE RED</strong>');
					this.insertar(datos);
				}
			},

			insertar: function(datos)
			{
				var parametros = 
				{
					type 		: 	'POST',
					url 		: 	'php/insertred.php',
					asyn 		: 	true,
					data 		: 	datos
				}

				$.ajax(parametros);

				$('#ncontrol2').val('');
				$('#atendedor2').val('Atendido por');
				$('#myModal').modal('show');
			}
		}; 


		var formularioSoporte =
		{
			error: function(id, enun)
			{
				$('#head3').removeClass('alert-info').addClass('alert-danger');
				$(id).css('border-color','red');
				contadorError3++;
				enunciadoError3 += enun;
			},

			errorControl: function()
			{
				this.error('#ncontrol3', 'N° control, ');
			},

			errorCorrero: function()
			{
				this.error('#correo', 'Correo, ');
			},

			erroTelefono: function()
			{
				this.error('#telefono', 'Telefono, ');
			},

			errorActividad: function()
			{
				this.error('#actividad', 'Actividad, ');
			},

			errorDiagnostico: function()
			{
				this.error('#diagnostico', 'Diagnostico, ');
			},

			errorAtendedor: function()
			{
				this.error('#atendedor3', 'Atendido por, ');
			},

			mostrar: function(datos)
			{
				if(contadorError3 > 0)
				{
					var texto = '<strong>SOPORTE TECNICO</strong> verifique los campos de  <strong>'+enunciadoError3+'</strong>';
					$('#head3').html(texto);
				}
				else
				{
					$('#head3').html('<strong>SOPORTE TECNICO</strong>');
					this.insertar(datos);
				}
			},

			insertar: function(datos)
			{
				var parametros =
				{
					type 	: 	'POST',
					async 	: 	true,
					data 	: 	datos,
					url 	: 	'php/insertsoporte.php'
				}

				$.ajax(parametros);


				$('#ncontrol3').val('');
				$('#correo').val('');
				$('#telefono').val('');
				$('#actividad').val('');
				$('#diagnostico').val('');
				$('#atendedor3').val('Atendido por');
				$('#myModal').modal('show');
			}
		};


	});
})();