
function es_numero() {

  var input1 = document.getElementById("input1").value;

  if(isNaN(input1)){
    document.getElementById("results").innerHTML = "No es un numero";
  }
  else{
    document.getElementById("results").innerHTML = "Si es un numero"
  }
}
