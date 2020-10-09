
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si es un nombre
  if(!isNaN(input1)){
    //Guardem a una variable la operacio de divisio mostrant 3 decimals
    var resultat = parseFloat(input1 / 19).toFixed(3);
    //Mostrem resultat
    document.getElementById("results").innerHTML = resultat;
  }
  
}
