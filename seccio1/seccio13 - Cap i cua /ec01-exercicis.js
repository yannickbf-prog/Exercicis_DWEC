
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Agafem la primera lletra
    var primeraLletra = input1.charAt(0);
    //Mostrem resultat concatenant com voliem
    document.getElementById("results").innerHTML = primeraLletra+input1+primeraLletra;
  }
}
