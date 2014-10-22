<?php 

	include 'config.php';
	mysql_set_charset('utf8');
	$datos = array();

	$sql = mysql_query('SELECT * FROM buzon ORDER BY id DESC');
	$i = 0;
	while($fila = mysql_fetch_array($sql))
	{
		$datos[$i] = array(
			'id' => $fila['id'],
			'carrera' => $fila['carrera'],
			'semestre' => $fila['semestre'],
			'telefono' => $fila['telefono'],
			'objetivo' => $fila['objetivo'],
			'ncontrol' => $fila['numero_control'],
			'correo' => $fila['correo'],
			'comentario' => $fila['comentario'],
			'fecha' => $fila['fecha'],
			'hora' => $fila['hora']
			);
		$i++;
	}

	$send = json_encode($datos);
	echo $send;
 ?>