
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Recorrem tot l'estring i copiem a una variable tots els caracters que no siguin un espai, i si son un espai comprobem que no tenen un altre espai darrere seu
    var strFinal = "";
    var lengthInput1 = (input1).length;
    for(var i = 0; i < lengthInput1; i++){
      if(input1.charAt(i) == " "){
        if(input1.charAt(i-1) != " "){
          strFinal += input1.charAt(i);
        }
      }
      else{
        strFinal += input1.charAt(i);
      }
    }
    //Mostrem l'string substituint els espais per guions
    document.getElementById("results").innerHTML = strFinal.replace(/ /gi,"-");
  }
}
