




/*
     FILE ARCHIVED ON 2:18:29 Oct 29, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:34:35 Feb 21, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function(){  
	$("#contactform").submit(function(e) { 
		var validacionOk = true;
		var fields = $(this).serializeArray();
		jQuery.each( fields, function( key, field ) {
			if(field.value.length === 0 && $("#" + field.name).attr("class") === 'form-control'){
				$('#label_info').text("Debe ingresar " + $("#" + field.name).attr("placeholder"));
				$('#modal-title').text("Es Requerido."); 
				$('#modal_info').modal('show');
				validacionOk = false;
				 return false;
			}
		});
	
		if(validacionOk == true){
			e.preventDefault();
			$.ajax({	
				url: "/cgi-bin/recibe_correo.pl",
				method: "POST",
				dataType: 'json',
				data: $(this).serialize(),
				success: function(data) {
					if(data.status == 'OK'){ 
					// 	location.href = data.redirect;
						$("#name").val('');
						$("#email").val('');
						$("#subject").val('');
						$("#comments").val('');

						$('#label_info').text(data.message);
						$('#modal-title').text("Mensaje Enviado."); 
						$('#modal_info').modal('show');

					}else{
						$('#label_info').text(data.message);
						$('#modal-title').text("Error al enviar mensaje. Vuelva a intentarlo o comuniquese al correo info@ninpo.cl");
						$('#modal_info').modal('show');
					}
				}
			});  
		}
		return false;
	});

});