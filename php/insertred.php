<?php 

	include 'config.php';
	mysql_set_charset('utf8');

	$numero_control = $_POST['ncontrol'];
	$atendedor = $_POST['atendedor'];

	$sql = "INSERT INTO cablesred (numero_control, atendedor, fecha, hora) VALUES ('$numero_control', '$atendedor', NOW(), NOW() )";
	mysql_query($sql);
	mysql_close($conexion);

 ?>