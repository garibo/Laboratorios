(function(){
	var app = angular.module('dashboard',['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
	.when('/buzon',{
		templateUrl: 'modules/buzon.html',
		controller: 'tablaController'
	})
	.when('/encuesta',{
		templateUrl: 'modules/estadistica.html'
	})
	.when('/servicios',{
		templateUrl: 'modules/servicios.html',
		controller: 'serviciosController'
	})
	.when('/registrar',{
		templateUrl: 'modules/registrar.html'
	})
	.otherwise({
		redirectTo: '/buzon'
	});
});

app.controller('tablaController',['$scope', '$http', function ($scope, $http){

	$http.get('php/getbuzon.php')
	.success(function(e){
		$scope.datos = e;
	})
	.error(function(){
		console.log("Error no mames :(");
	});

	/*Variables de paginacion*/
	$scope.datos = [];
	$scope.curPage = 0;
 	$scope.pageSize = 10;

 	/*Variables para mostrar en el modal*/
 	$scope.carrera = "";
 	$scope.semestre = "";
 	$scope.telefono = 0;
 	$scope.objetivo = "";
 	$scope.ncontrol = "";
 	$scope.correo = "";
 	$scope.comentario = "";
 	$scope.fecha = "";
 	$scope.hora = "";


	$scope.cosa = function(carrera, semestre, telefono, objetivo, ncontrol, correo, comentario, fecha, hora)
	{
		 	$scope.carrera = carrera;
		 	$scope.semestre = semestre;
		 	$scope.telefono = telefono;
		 	$scope.objetivo = objetivo;
		 	$scope.ncontrol = ncontrol;
		 	$scope.correo = correo;
		 	$scope.comentario = comentario;
		 	$scope.fecha = fecha;
		 	$scope.hora = hora;
	};

	$scope.numberOfPages = function() {
		return Math.ceil($scope.datos.length / $scope.pageSize);
	};


}]);


/*Filtro creado para la paginacion*/
angular.module('dashboard').filter('pagination', function()
{
 return function(input, start)
 {
  start = +start;
  return input.slice(start);
 };
});


angular.module('dashboard').filter('pagination2', function()
{
 return function(input, start)
 {
  start = +start;
  return input.slice(start);
 };
});


angular.module('dashboard').filter('pagination3', function()
{
 return function(input, start)
 {
  start = +start;
  return input.slice(start);
 };
});

app.controller('serviciosController',['$scope', '$http', function ($scope, $http){

	$impresiones = [];
	$http.get('php/getimpresiones.php')
	.success(function(e){
		$scope.impresiones = e;
	})
	.error(function(){
		console.log("Error no mames :(");
	});

	/*Variables de paginacion*/
	$scope.curPage = 0;
 	$scope.pageSize = 5;

 	$scope.numberOfPages = function() {
		return Math.ceil($scope.impresiones.length / $scope.pageSize);
	};


	/*Acciones para la tabla de impresiones*/
	$scope.cablesred = [];
	$http.get('php/getcablesred.php')
	.success(function(e){
		$scope.cablesred = e;
	})
	.error(function(){
		console.log("Error no mames :(");
	});

	/*Variables de paginacion para clables de red*/
	$scope.curPage2 = 0;
 	$scope.pageSize2 = 5;

 	$scope.numberOfPages2 = function() {
		return Math.ceil($scope.cablesred.length / $scope.pageSize2);
	};




	/*Acciones para la tabla de soporte*/


 	/*Variables para mostrar en el modal*/

 	$scope.id = 0;
 	$scope.ncontrol = "";
 	$scope.correo = "";
 	$scope.telefono = "";
 	$scope.actividad = "";
 	$scope.diagnostico = "";
 	$scope.atendedor = "";
 	$scope.fecha = "";
 	$scope.hora = "";


	$scope.recibir = function(id, ncontrol, correo, telefono, actividad, diagnostico, atendedor, fecha, hora)
	{
		$scope.id = id;
	 	$scope.ncontrol = ncontrol;
	 	$scope.correo = correo;
	 	$scope.telefono = telefono;
	 	$scope.actividad = actividad;
	 	$scope.diagnostico = diagnostico;
	 	$scope.atendedor = atendedor;
	 	$scope.fecha = fecha;
	 	$scope.hora = hora;
	};

	$scope.soporte = [];
	$http.get('php/getsoporte.php')
	.success(function(e){
		$scope.soporte = e;
	})
	.error(function(){
		console.log("Error no mames :(");
	});

	/*Variables de paginacion para clables de red*/
	$scope.curPage3 = 0;
 	$scope.pageSize3 = 5;

 	$scope.numberOfPages2 = function() {
		return Math.ceil($scope.soporte.length / $scope.pageSize3);
	};


}]);
})();