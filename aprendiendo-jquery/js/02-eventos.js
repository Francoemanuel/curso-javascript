$(function(){
    //MouseOver y MouseOut
    var caja = $("#caja");

    // caja.on('mouseover',function(){
    //     $(this).css("background","red");
    // });

    // caja.on('mouseout',function(){
    //     $(this).css("background","blue");
    // });

    //  Ahora, el código escucha los eventos mouseenter y mouseleave 
    
    $('#caja').on('mouseenter', function() {
        $(this).css("background","red");
    }).on('mouseleave', function() {
        $(this).css("background","blue");
    });
        
    // click, doble click
    caja.on('click', function(){
        $(this).css("background","purple")
               .css("color","white");
    });
    caja.on('dblclick', function(){
        $(this).css("background","pink")
               .css("color","white");
    });

    // focus y blur

    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.on('focus', function(){
        $(this).css("border", "2px solid purple")
    });
    nombre.on('blur', function(){
        $(this).css("border", "2px solid #ccc");
        datos.text($(this).val()).show();
    });

    // Mousedown y mouseup
    datos.on('mousedown', function(){
        $(this).css("border-color", "gray");
    });
    datos.on('mouseup', function(){
        $(this).css("border-color", "black");
    })

    // Mousemove
    $(document).on('mousemove', function(){
        var sigueme = $("#sigueme");
        $('body').css('cursor','none');
        sigueme.css('left', event.pageX)
               .css('top', event.pageY);
    });
});
