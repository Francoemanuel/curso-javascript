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

});