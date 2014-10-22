(function(){
	$.ajax({
      type    :   'POST',
      async   :   true,
      url     :   'php/getRows.php'
    })
    .done(function(e){
      var datos = $.parseJSON(e);
      var a = datos[0].impresiones;
      var b = datos[0].soporte;
      var c = datos[0].cablesred;

  var total1 = (((a / (a+b+c) * 100).toFixed(0)) + "%");
  var total2 = (((b / (a+b+c) * 100).toFixed(0)) + "%");
  var total3 = (((c / (a+b+c) * 100).toFixed(0)) + "%");
    var piedata = [
       {
          value: b,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: total2
        },
        {
          value: c,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: total3
        },
        {
          value: a,
          color: "#4D5360",
          highlight: "#616774",
          label: total1
        }

      ];

      
        var ctx = document.getElementById("chart-area").getContext("2d");
        window.myPolarArea = new Chart(ctx).Pie(piedata, {
          responsive:true
        });
       });
})();