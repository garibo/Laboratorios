<?php 

	include 'config.php';
	mysql_set_charset('utf8');

	$numero_control = $_POST['ncontrol'];
	$numero_impresiones = $_POST['nimpresiones'];
	$atendedor = $_POST['atendedor'];

	$sql = "INSERT INTO impresiones (numero_control, numero_impresiones, atendedor, fecha, hora) VALUES ('$numero_control', $numero_impresiones, '$atendedor', NOW(), NOW())";
	mysql_query($sql);
	mysql_close($conexion);


 ?>