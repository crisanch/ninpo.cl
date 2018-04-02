<?php
//Estoy recibiendo el formulario, compongo el cuerpo 

//echo "<pre>";print_r($_POST);echo "</pre>";exit;

   	$cuerpo = "Formulario enviado\n"; 
   	$cuerpo .= "Nombre: " . $_POST["name"] . "\n"; 
   	$cuerpo .= "Email: " . $_POST["email"] . "\n"; 
   	$cuerpo .= "Asunto: " . $_POST["subject"] . "\n"; 
   	$cuerpo .= "Comentarios: " . $_POST["comments"] . "\n"; 

   	//mando el correo... 
   	mail("info@ninpo.cl","Contacto ninpo.cl",$cuerpo); 

   	//doy las gracias por el envío 
   	echo "Gracias por rellenar el formulario. Se ha enviado correctamente."; 

?>