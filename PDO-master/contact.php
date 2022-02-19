<?php 	
    #Datos de entrada
    $nombre     = $_POST['nombre'];
    $email      = $_POST['email'];
    $mensaje    = $_POST['mensaje'];
    
    #Datos de correo
    $email_to = "nombre@dominio.com";
    $email_subject = "Mensaje desde Web";  
    
    $email_message = "Contenido del Mensaje.\n\n";
    $email_message .= "Nombre:   ".$nombre."\n";
    $email_message .= "Email:    ".$email."\n";
    $email_message .= "Mensaje:  ".$mensaje."\n";
 
    //Encabezados
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/plain; charset=utf8' . "\r\n";
    $headers .= 'To: '.$email_to. "\r\n";
    $headers .= 'From: '.$email."\r\n";
    $headers .= 'CC: '.$email."\r\n";
    'X-Mailer: PHP/' . phpversion();
    
    #Envío de correo
    mail($email_to, $email_subject, $email_message, $headers);
	
 ?>
