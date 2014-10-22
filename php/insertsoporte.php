<?php 

	include 'config.php';
	mysql_set_charset('utf8');

	$numero_control = $_POST['ncontrol'];
	$correo = $_POST['correo'];
	$telefono = $_POST['telefono'];
	$actividad = $_POST['actividad'];
	$diagnostico = $_POST['diagnostico'];
	$atendedor = $_POST['atendedor'];

	$sql = "INSERT INTO soporte (numero_control, correo, telefono, actividad, diagnostico, atendedor, fecha, hora) VALUES ('$numero_control', '$correo', '$telefono', '$actividad', '$diagnostico', '$atendedor', NOW(), NOW())";
	mysql_query($sql);
	mysql_close($conexion);

 ?>