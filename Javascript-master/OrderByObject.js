 
 //String
 function OrderByUbicacion(lugar, obj, order){ 
    function SortByString(x,y) {
        return ((x.Ubicacion == y.Ubicacion) ? 0 : 
        ((x.Ubicacion > y.Ubicacion) ? 1 : -1 ));
    }
    obj.sort(SortByString)
    $(lugar).html(TbodyDocumentosRechazados(obj, order))
  }
  
  //INT
  function OrderByValorDoc(lugar, obj, order){ 
      function SortByInt(x,y) {
        return x.Valor_Documento - y.Valor_Documento; 
      }
      obj.sort(SortByInt)
      $(lugar).html(TbodyDocumentosRechazados(obj, order))
  }
  
  //Date
  function OrderByFechaDocumento(lugar, obj, order){ 
      function SortByDate(a, b) {
        var dateA = new Date(a.Fecha_Documento.toDate("dd/mm/yyyy hh:ii:ss")).getTime();
        var dateB = new Date(b.Fecha_Documento.toDate("dd/mm/yyyy hh:ii:ss")).getTime();
        return dateB > dateA ? 1 : -1; 
      }
      obj.sort(SortByDate)
      $(lugar).html(TbodyDocumentosRechazados(obj, order))
  }
  
  if (order == 'desc') {obj.reverse();}
