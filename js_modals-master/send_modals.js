function Alert(icono, mensaje){
    $('.jmodal').remove();
    $.ajax({
      url: 'config/modals/alert',
      type: 'GET',
      dataType: 'html',
      data: ''
    })
    .done(function(info) {
      $(".loader").fadeOut(); //Gift de carga
      $('#modals').html(info);
      $('.mensaje').html(mensaje);
      var image = Icono(icono);
      $('.icono').html(image);
  })
}
function AlertReload(icono, mensaje){
    $('.jmodal').remove();
    $.ajax({
      url: 'config/modals/alertReload',
      type: 'GET',
      dataType: 'html',
      data: ''
    })
    .done(function(info) {
      $(".loader").fadeOut(); //Gift de carga
      $('#modals').html(info);
      $('.mensaje').html(mensaje);
      var image = Icono(icono);
      $('.icono').html(image);
  })
}
function Confirm(icono, mensaje){
    $('.jmodal').remove();
    $.ajax({
      url: 'config/modals/confirm',
      type: 'GET',
      dataType: 'html',
      data: ''
    })
    .done(function(info) {
      $(".loader").fadeOut(); //Gift de carga
      $('#modals').html(info);
      $('.mensaje').html(mensaje);
      var image = Icono(icono);
      $('.icono').html(image);
  })
}

function Icono(icono) {
  var image = new Image();
  var src = 'config/icon-modals/'+icono+'.png';
  image.src = src;
  image.style = 'float: left';
  return image;
}
