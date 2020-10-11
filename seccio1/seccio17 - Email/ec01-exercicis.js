
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Creem variable que enmagatzemara els errors
    var errors = "";

    //Comprobem que te una sola @
    var lengthInput1 = (input1).length;
    var contarArrroba = 0;
    for(var i = 0; i < lengthInput1; i++){
      if(input1.charAt(i) == "@"){
        contarArrroba++;
      }
    }

    //Si te mes d'una arroba o no te afegirem l'error
    if(contarArrroba != 1){
      errors += "L'email ha de tindre una '@'. ";
    }
    
    //Comprobem que els ultims 4 caracters siguin .net .com .org
    var ultims4Carcaters = input1.substr(-4,4);
    if(ultims4Carcaters != ".net" && ultims4Carcaters != ".com" && ultims4Carcaters != ".org"){
      errors += "L'email ha de tenir una extensio .net, .com o .org";
    }

    //Si no te errors mostrarem misatge indicant que s'ha posat be l'email. De lo contrari mostrarem els errors
    if(errors == ""){
      document.getElementById("results").innerHTML = "Email correcte";
    }
    else{
      document.getElementById("results").innerHTML = errors;
    }
    
  }
}
