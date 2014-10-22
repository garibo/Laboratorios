(function(){
	$.ajax({
	url 		: 	'php/getencuesta.php',
	type 		:  	'POST',
	async 		:  	true
}).
done(function(data){
	var datos = $.parseJSON(data);
	console.log(datos);

	for(var i = 0;i<18;i++)
	{
	 var a = ((datos[i].uno / (datos[i].uno + datos[i].dos + datos[i].tres + datos[i].cuatro + datos[i].cinco)*100).toFixed(0) + "%");
	 var b = ((datos[i].dos / (datos[i].uno + datos[i].dos + datos[i].tres + datos[i].cuatro + datos[i].cinco)*100).toFixed(0) + "%");
	 var c = ((datos[i].tres / (datos[i].uno + datos[i].dos + datos[i].tres + datos[i].cuatro + datos[i].cinco)*100).toFixed(0) + "%");
	 var d = ((datos[i].cuatro / (datos[i].uno + datos[i].dos + datos[i].tres + datos[i].cuatro + datos[i].cinco)*100).toFixed(0) + "%");					 
	 var e = ((datos[i].cinco / (datos[i].uno + datos[i].dos + datos[i].tres + datos[i].cuatro + datos[i].cinco)*100).toFixed(0) + "%");

	var pieData = [	{value: datos[i].uno,color:"#F7464A",highlight: "#FF5A5E",label: a},
					{value: datos[i].dos,color: "#46BFBD",highlight: "#5AD3D1",label: b},
					{value: datos[i].tres,color: "#FDB45C",highlight: "#FFC870",label: c},
					{value: datos[i].cuatro,color: "#949FB1",highlight: "#A8B3C5",label: d},
					{value: datos[i].cinco,color: "#4D5360",highlight: "#616774",label: e}];
		   	   

	var ctx = document.getElementById("chart-area"+(i+1)).getContext("2d");
	window.myPolarArea = new Chart(ctx).Pie(pieData, {
	responsive:true
	});

	$('#pregunta'+(i+1)).append(datos[i].pregunta+"");
	}
		
	})
	.fail(function(){
		alert("Algo anda mal");
	});
})();
