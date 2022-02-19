//ruta de envío
var route = 'api/revista'

	var PdfToImage = function() {
		$('#pdf').attr('disabled', true);
    $('#enviar').css('visibility', 'visible');
    $('#cancelar').css('visibility', 'visible');
    $('#pdf').css('margin-top', '50px');
		$(".loader").fadeIn("slow");
   		PDFJS.disableWorker = true;
      	if (file = document.getElementById('pdf').files[0]) {
        fileReader = new FileReader();
        fileReader.onload = function() 
        {
          PDFJS.getDocument(fileReader.result).then(function getPdfHelloWorld(pdf) {
         	var raw = "";
         	var input = "";
         	var pdfMax = pdf.numPages;
          $('#contador').attr('value', pdfMax);
//click
          $('#send').attr('disabled', false);
          $('#send').on('click', function(event) {
            var nomValido = ValidarNombre();
            if (nomValido == true) {
              $(".loader").fadeIn();
            	for (i = 1; i <= pdfMax; i++){	
            	  raw += `<canvas id="the-canvas[${i}]" style="border:1px solid black;height: 120px"></canvas>`;
                $('#canvas').html(raw);
                Serialize(i);
              }
            }
          });


          function Serialize(i) {
            pdf.getPage(i).then(function getPageHelloWorld(page) {
              var scale = 2;
              var viewport = page.getViewport(scale);
              var canvas = document.getElementById('the-canvas['+i+']');
              var context = canvas.getContext('2d');
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              var task = page.render({canvasContext: context, viewport: viewport})
                task.promise.then(function(){
                  var img64 = canvas.toDataURL('png');
                  Enviar(i, img64);
                  $('canvas').remove();
                });
            });
          }

      		
          }, function(error){
          	Alert('error.png', 'Formato de archivo erroneo, desconocido o está dañado \n el archivo debe ser PDF');
            location.reload();
          });
        };

        fileReader.readAsArrayBuffer(file);
      }
        $(".loader").fadeOut();
	}

  function CrearImagen(src){
      var image = new Image();
      image.src = src;
      image.style = 'width:100px';
      return image;
  }

  function Enviar(ifor, img64){

    var nomRevista  = $('#nombre').val()
    var count     = $('#contador').val();
    var _url    = `/jorge/image/ediciones/${nomRevista}/`;

    $(".loader").fadeIn();
    Objeto(nomRevista, _url, ifor, img64);

  //  $(".loader").fadeOut();
  }
   function Objeto(nomRevista, _url, i, img64) {
      var hoy = DateTimeNow();
      var obj = {
        "idRevista":"",
        "nomRevista":nomRevista,
        "fechaRevista":hoy,
        "urlRevista": _url+i+'.png/',
        "img64":img64,
        "i":i
      };
      Agregar('POST','',obj);
    }


   function Agregar(met, id, obj) {
      __ajax(route, met,id,obj)
      .done(function(codigo) {
        if (codigo == '200') {
          console.log('codigo: ', codigo);
          $(".loader").fadeOut();
          AlertReload('success.png', 'Subida exitosa!');
        }
        else{
        Alert('error.png','Algo salió mal, inténtelo de nuevo.');
        console.log('error: ', codigo);
        }
      });
  }

function ValidarNombre(){
  var nom = __ajax(route+'/nombre', 'GET','All','').responseText;
  var arrNom = JSON.parse(nom);
  var nomRevista = $('#nombre').val();

  if (nomRevista == "" || nomRevista == null) {
    Alert('error.png','Ingrese un nombre a la edición');
    return false;
  }
  else{
    var retorno = true;
      jQuery.each(arrNom, function(index, val) {
        if (val.nomRevista == nomRevista) {
          Alert('error.png','Ya existe una edición llamada: Edición N°'+nomRevista);
          retorno = false;
          return false;
        }
      });
      return retorno;
  }
}
