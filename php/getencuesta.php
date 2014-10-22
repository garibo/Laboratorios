<?php 
	
	include 'config.php';
	mysql_set_charset('utf8');
	$datos =  array();

	for($x = 0; $x < 18; $x++)
	{
		mysql_set_charset('utf8');

		$sql = mysql_query('SELECT * FROM encuesta');
		$i = 0;
		$count1 = 0;
		$count2 = 0;
		$count3 = 0;
		$count4 = 0;
		$count5 = 0;
		while($fila = mysql_fetch_array($sql))
		{
			$fila['preg'.($x+1)] == 1 ?  $count1++ : $count1; 
			$fila['preg'.($x+1)] == 2 ?  $count2++ : $count2; 
			$fila['preg'.($x+1)] == 3 ?  $count3++ : $count3; 
			$fila['preg'.($x+1)] == 4 ?  $count4++ : $count4; 
			$fila['preg'.($x+1)] == 5 ?  $count5++ : $count5; 
			$i++;
		}

		$peticion = mysql_query('SELECT pregunta FROM preguntas WHERE id = '.($x+1));
		$respuesta = mysql_fetch_object($peticion);
	    $pregunta = $respuesta->pregunta;
		$datos[$x] = array(
			'uno' => $count1,
			'dos' => $count2,
			'tres' => $count3,
			'cuatro' =>$count4,
			'cinco' => $count5,
			'pregunta' => $pregunta
		);

	}

	$send = json_encode($datos);
	echo $send;

	
 ?>