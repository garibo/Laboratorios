<?php 
	
	include 'config.php';

	$NumControl = $_POST['ncontrol'];

	$sql = "SELECT * FROM laboratorios.lista_alumnos WHERE No_Control='$NumControl'";
	$result = mysql_query ($sql);
	$rows = mysql_num_rows($result);

	

	if($rows <= 0 || $NumControl = "")
	{
		echo "Noencontrado";
	}
	else
	{
		echo "Existente";
	}

	mysql_close($conexion);

 ?>