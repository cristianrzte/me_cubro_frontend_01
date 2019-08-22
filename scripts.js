

      //Establezco el valor de la variable dropdown
      let dropdown = $('#form_country');

      //Limpio el elemento, le agrego un item, lo selecciono
      dropdown.empty();
      dropdown.append('<option selected="true" disabled>Country</option>');
      dropdown.prop('selectedIndex', 0);

      //Defino la url de la Api
      const url = 'https://api-test.mecubro.net/api/countries';

      // Lleno el elemento "select" con la lista de paises de la Api
      $.getJSON(url, function (data) {
        $.each(data, function (key, entry) {
          dropdown.append($('<option></option>').attr('value', entry.name).text(entry.name));
        })
      });

      // Inicializo el validador
      // @see http://1000hz.github.io/bootstrap-validator

      $('#contact-form').validator();

      //Capturo los datos del formulario antes de ser enviados
      $("form").submit(function(e){

        //Detengo el envio de los datos
        e.preventDefault();


        //Asigno los valores de los input a las variables.
        var name     = $("input[name='name']").val();
        var lastname = $("input[name='lastname']").val();
        var birthday = $("input[name='dob']").val() ;
        var phone    = $("input[name='phone']").val() ;
        var country  = $("#form_country").val();

        //Agrego a la tabla, los valores de las variables obtenidas anteriormente, agrego un boton para eliminar el registro o row de la tabla
        $(".table tbody").append("<tr><td>"+ name + " " + lastname +"</td><td>"+birthday + '<br><small>Date of birth</small>' +"</td><td>"+phone +'<br><small>Phone number</small>'+"</td><td>"+country+ '<br><small>Country</small>'+"</td><td><button class='btn btn-secondary delete'>Delete</button></td></tr>");

        //Mensaje para el usuario distraido
        alert('Contacto cargado correctamente');

        //Limpio los input
        $("input[name='name']").val('');
        $("input[name='lastname']").val('');
        $("input[name='dob']").val('');
        $("input[name='phone']").val('');
        $("#form_country").val('0'); ;

    });

    //Obtiene el elemento donde se hizo click y lo elimina
    $("body").on("click", ".delete", function(){
        $(this).parents("tr").remove();
    });
