function Cadena(str){
    var bool = !str || !/[^\s]+/.test(str)?false:/^([A-Za-záéíóúàèìòùç ])*$/.test(str)
    return bool?str:bool
}
function Email(email){
    return !/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)?false:email
}
function Telefono(tel){
    function Contar(){
        cont = 0;
        for(i=0;i<tel.length;i++){
           let = tel.substring(i,(i+1));
           if ('+'==let){cont = cont+1;}
        }
        return cont;
    }
    if (Contar()!=1) {return false}
    var bool = (tel.length>=8)?tel:false
    return !/^[0-9 .+]*$/.test(bool)?false:tel
}
function Contrasena(pass) {
// Dígitos, minúsculas y mayúsculas y símbolos
    return !/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(pass)?false:pass
}
function ValidarNumero(int){
    return !int || !/^-?(?:\d+(?:,\d*)?)$/.test(int)
}
function Empty(str){
    return !str || !/[^\s]+/.test(str);
}
function Select(int){
    return int==0?false:int;
}
/*
    console.log(ValidarCadena(null)); // true
    console.log(ValidarCadena(0)); // true
    console.log(ValidarCadena(7)); // false
    console.log(ValidarCadena("")); // true
    console.log(ValidarCadena("0")); // false
    console.log(ValidarCadena("  ")); // true
*/

function CheckRut(rut) {
    rut = String(rut);
    let valor = rut.replace(".", "").replace(".", "").replace("-", ""),
        cuerpo = valor.slice(0, -1),
        dv = valor.slice(-1).toUpperCase(),
        suma = 0,
        multiplo = 2;
    rut = Number(cuerpo) + "-" + dv;
    if (cuerpo.length < 7) { return false; }
    for (i = 1; i <= cuerpo.length; i++) {
        let index = multiplo * valor.charAt(cuerpo.length - i);
        suma = suma + index;
        multiplo = (multiplo < 7) ? multiplo + 1 : 2;
    }
    let dvEsperado = 11 - suma % 11;
    dv = dv == "K" ? 10 : dv;
    dv = dv == 0 ? 11 : dv;
    return (dvEsperado != dv) ? false : rut;
}
