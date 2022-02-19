$(document).ready(function(){
  $(window).on("load resize ", function() {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  }).resize();
    ///	Parámetros: id del div donde se encuentra la tabla, alto del tbody.
    // FijarTabla('#tabla',100)
});

function IE(){
  if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      //$('.tbl-content').css('overflow-y', 'scroll');
  }
}

function FixedHeader(idDiv, alto) {
    var tabla1= '<div class="tbl-default"><div class="tbl-header">'+$(idDiv).html()
    var pos   = tabla1.search("</thead>");
    pos       = parseInt(pos)+8
    var tabla2= tabla1.substring(pos, tabla1.length)
    var primero = tabla1.substring(0, pos)
    var segundo = '</table></div><div class="tbl-content" style="height: '+alto+'px;"><table>'
    var x  = primero + segundo+tabla2;
    return x;
}
function FijarTabla(idDiv, alto) {
	$(idDiv).html(FixedHeader(idDiv,alto))
}
