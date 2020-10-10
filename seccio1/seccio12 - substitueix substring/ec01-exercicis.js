
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    document.getElementById("results").innerHTML = input1.replace(/la/gi,"*");
  }
}
