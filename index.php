<?php 
    session_start();

    if(!isset($_SESSION['username']))
    {
      header("Location: login.php");
    }
?>
<!doctype html>
<html ng-app="dashboard">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Dashboard</title>
	<link rel="stylesheet" type="text/css" href="css/lib/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/lib/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/dash.css">


</head>
<body>

	<div id="header"></div>
	<div id="contenido">
		<div class="row">
			<div class="col-md-3">
				<div id="navegacion">

					<ul class="navegacionlateral">
						<li><a href="#/buzon"><i class="fa fa-inbox"></i>Buzon</a></li>
						<li><a href="#/encuesta"><i class="fa fa-bar-chart"></i>Encuesta</a></li>
						<li><a href="#/servicios"><i class="fa fa-tasks"></i>Servicios</a></li>
						<li><a href="#/registrar"><i class="fa fa-book"></i>Registrar</a></li>
						<li><a href="php/salir.php"><i class="fa fa-sign-out"></i>Salir</a></li>
					</ul>	

				</div>
			</div>
			
			<div class="col-md-9">
				<div id="subcontenido">
					<div ng-view>
						<!-- Ajexed conten here -->
					</div>

				</div>
			</div>
		</div>
		
	</div>
<script type="text/javascript" src="js/lib/jquery.min.js"></script>
<script type="text/javascript" src="js/lib/bootstrap.min.js"></script>
<script type="text/javascript" src="js/lib/angular.min.js"></script>
<script type="text/javascript" src="js/lib/angular-route.min.js"></script>
<script type="text/javascript" src="js/dash.js"></script>
</body>
</html>