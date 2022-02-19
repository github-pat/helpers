function NormalizarObjeto(obj){
  Number.prototype.isInteger = function() {
    return (this ^ 0) === +this;
  }
    try {
    (obj.length).isInteger()
    return obj;
  } catch(e) {
    var aux = []
    aux[0]  = obj
    obj = aux;
    return obj;
  }
}
