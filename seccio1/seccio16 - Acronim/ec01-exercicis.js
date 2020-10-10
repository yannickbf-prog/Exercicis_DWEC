
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Guardarem l'acronim a una variable. La primera lletra sempre l'agafem
    var acronim = input1.charAt(0);
    //Busquem la lletra despres d'un espai amb un bucle i l'ha afegim a la variable
    var lengthInput1 = (input1).length;
    for(var i = 0; i < lengthInput1; i++){
      if(input1.charAt(i) == " "){
        acronim += input1.charAt(i+1);
      }
    }
    //Mostrem l'acronim pasat a majuscules
    document.getElementById("results").innerHTML = acronim.toUpperCase();
  }
}
