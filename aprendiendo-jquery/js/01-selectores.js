// El simbolo dolar y la palabra jQuery son lo mismo
// Lo primero que hay que hacer es comprobar si el documento esta listo
// metodo ready esta en desuso
$(document).ready(function(){
    console.log("estamos listos!!");
});
// Nueva forma corta de comprobar si el documento esta cargado
$(function(){
    console.log("todo listo!!!");
    
    // Selector de ID
    $("#rojo").css("background", "red")
              .css("color", "white");
    $("#amarillo").css("background", "yellow")
                  .css("color","green");
    $("#verde").css("background","green")
               .css("color","white");

    // Selectores de clases
    var mi_clase = $(".zebra").css("padding", "5px");

    $(".sin_borde").on('click', function(){
        $(this).addClass('zebra');
    });

    // Selectores de etiqueta
    var parrafos = $('p').css('cursor','pointer');

    parrafos.click(function(){
        var cambia = $(this);

        if(!cambia.hasClass('grande')){
            cambia.addClass('grande');
        }else{
            cambia.removeClass('grande');
        }
    });

    // Selectores de atributo
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    // Otros
    // $('p, a').addClass('margen-superior');

    var busqueda = $("#caja").find('.resaltado');
    console.log(busqueda);
});

