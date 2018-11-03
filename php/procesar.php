<?php
// LLamando a los campos
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje= $_POST['mensaje'];

// Datos del correo

$destinatario = "josearturovelasquezlaborde@gmail.com ";
$asunto = "Oferta de proyecto";

$carta = "De: $nombre \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

mail($destinatario, $asunto, $carta);
header('Location:../index.html');

?>

