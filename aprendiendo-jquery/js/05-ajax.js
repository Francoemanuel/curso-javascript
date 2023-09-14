$(function(){
    // El metodo Load nos permite hacer una peticion ajax por get
    // y inscruptar el resultado dentro de un div o cualquier elemente que 
    // yo tengo en la pagina
    
    // $("#datos").load("https://reqres.in");

    // Get y Post
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        })
    });

   

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            "name": $('input[name="name"]').val(),
            "cargo": $('input[name="cargo"]').val(),
        };
        // $.post($(this).attr("action"), usuario, function(response){
        //     console.log(response);
        // }).done(function(){
        //     alert("Usuario añadido correctamente");
        // });

        // otra forma de utilizar peticiones ajax es usando el metodo $.ajax
        // este metodo nos permite manipular de una manera mas amplia cualquier peticion 
        // ajax que queramos hacer

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            // en data le paso el objeto que yo voy a enviar o los datos
            data: usuario,
            // beforeSend lo que hace es que antes de que se envie haga alguna accion
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            // con timeout le indico cuanto quiero que tarde como maximo la peticion
            timeout: 2000

            // dataType: 'json',
            // contenType: 'application/json',
        });

        return false;
    });


});