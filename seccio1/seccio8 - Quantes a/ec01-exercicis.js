
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Recorrem lletra a lletra tot l'string i si trobem alguna "a" o "A" incrementem en 1 el contador
    contadorLletraA = 0;
    for(var i = 0; i < (input1).length; i++){
      if(input1.charAt(i).toLowerCase()=="a"){
        contadorLletraA++;
      }
    }
    document.getElementById("results").innerHTML = contadorLletraA;
  }
}
