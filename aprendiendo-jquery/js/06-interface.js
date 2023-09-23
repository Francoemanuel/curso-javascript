$(function(){
    // Mover elemento por la pagina
//   $('.elemento').draggable();

    // Redimensionar elemento por la pagina
  $('.elemento').resizable();

      // seleccionar y ordenar elementos
    //   $('.lista-seleccionable').selectable();
  $('.lista-seleccionable').sortable({
    update: function(event, ui){
      console.log("Cambio el orden de la lista");
    }
  });

  // Drop
  $("#elemento-movido").draggable();
  $("#area").droppable({
    drop: function(){
      console.log("Has soltado algo dentro del area");
    }
  });

  // Efectos
  $("#mostrar").click(function(){
    // $(".caja-efectos").fadeToggle();
    // $(".caja-efectos").toggle("explode");
    // $(".caja-efectos").toggle("blind");
    // $(".caja-efectos").toggle("slide");
    // $(".caja-efectos").toggle("drop");
    // $(".caja-efectos").toggle("fold");
    // $(".caja-efectos").toggle("puff");
    // $(".caja-efectos").toggle("scale");
    $(".caja-efectos").toggle("shake", 4000); 
  });

  // Tooltip
  $(document).tooltip();

  // Dialog
  $("#lanzar-popup").click(function(){
    $("#popup").dialog();
  })

  // Datepicker
  $("#calendario").datepicker();

  // Tabs
  $("#pestanas").tabs();


});