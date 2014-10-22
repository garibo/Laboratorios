<?php 

	include 'config.php';
	mysql_set_charset('utf8');

	$sql = "SELECT * FROM impresiones";
	$resultado = mysql_query($sql);
	$rows1 = mysql_num_rows($resultado);

	$sql = "SELECT * FROM cablesred";
	$resultado = mysql_query($sql);
	$rows2 = mysql_num_rows($resultado);


	$sql = "SELECT * FROM soporte";
	$resultado = mysql_query($sql);
	$rows3 = mysql_num_rows($resultado);

	$datos[0] = array(
			'impresiones' => $rows1,
			'cablesred' => $rows2,
			'soporte' => $rows3
	);

	$send = json_encode($datos);
	echo $send;


 ?>