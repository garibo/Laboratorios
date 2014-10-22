  (function(){
    
  
  $(document).ready(inicio);

  function inicio()
  {  
    $("#enviar").click(procesar);
    $('input').on("keypress", function(e) {
     if(e.keyCode == 13)procesar();
    });
  }

  function procesar()
  {
    var nombre = $("#username").val();
    var contrasena = $("#password").val();

    var datos = {
      'username' : nombre,
      'password' : contrasena
    };

      $.ajax({
       url: 'php/validar.php',
        type: 'POST',
        async: true,
        data: datos,
        error: errorFormulario
      })
      .done(function(e){
        e == 'logeado' ? cambiar() : errorFormulario(); ;
      });
  }

  function cambiar()
  {
    document.location.href = "index.php";
  }

  function errorFormulario ()
  {
    $(".alert").remove();
    $( "form" ).before('<div class="alert alert-danger alert-dismissible fade in" role="alert" id="equivocar"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>    <strong>Upss!</strong> Parece que tu contraseña o nombre de usuario son incorrectos. :(  </div>');      
  }

  
})();