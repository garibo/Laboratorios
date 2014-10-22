<?php 

	$conexion = mysql_connect("localhost","kgaribo","360flip");
	if (!$conexion) { die("Fallo la conexión a la Base de Datos:" . mysql_error()); }

	$seleccionar_bd = mysql_select_db("laboratorios", $conexion);
	if (!$seleccionar_bd) { die("Fallo la selección de la Base de Datos: " . mysql_error()); }
	
 ?>