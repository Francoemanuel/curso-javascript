$(function(){
    reloadLinks();
    $('#add_button').click(function(){
        // si uso prepend me lo añade al principio de la lista
        // si uso before me lo añade afuera de la lista
        $("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');
        $("#add_link").val('');
        reloadLinks();
    }).removeAttr('disabled');

});

function reloadLinks(){
    $('a').each(function(index, element){
        var obtengoEnlace = $(this);
        var enlace = $(this).attr("href");

        obtengoEnlace.attr('target','_blank');
        obtengoEnlace.removeAttr('disable')
        obtengoEnlace.text(enlace);
    });
}