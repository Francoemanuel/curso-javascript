$(function(){
    console.log($('a').length);

    $('a').each(function(index, element){
        var obtengoEnlace = $(this);
        var enlace = $(this).attr("href");
        obtengoEnlace.text(enlace);
    });
});