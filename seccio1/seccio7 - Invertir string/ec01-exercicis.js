
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Si en comptes de un string ens posen un numero ho pasem a string
    if(!isNaN(input1)){
      input1 = (input1).toString();
    }
    //Farem un bucle invers i guardarem cada caracter en un string (al reves que l'original) i mostrarem aquesta variable
    var stringInvers = "";
    for(var i = input1.length; i > -1; i--){
      stringInvers += input1.charAt(i);
    }
    document.getElementById("results").innerHTML = stringInvers;    
  }
}
