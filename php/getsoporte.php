<?php 

	include 'config.php';
	mysql_set_charset('utf8');
	$datos = array();

	$sql = mysql_query('SELECT * FROM soporte ORDER BY id DESC');
	$i = 0;
	while($fila = mysql_fetch_array($sql))
	{
		$datos[$i] = array(
			'id' => $fila['id'],
			'ncontrol' => $fila['numero_control'],
			'correo' => $fila['correo'],
			'telefono' => $fila['telefono'],
			'actividad' => $fila['actividad'],
			'diagnostico' => $fila['diagnostico'],
			'atendedor' => $fila['atendedor'],
			'fecha' => $fila['fecha'],
			'hora' => $fila['hora']
			);
		$i++;
	}

	$send = json_encode($datos);
	echo $send;
 ?>