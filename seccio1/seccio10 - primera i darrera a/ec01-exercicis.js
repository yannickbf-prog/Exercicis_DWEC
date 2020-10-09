
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    var resultatFinal = "";
    //Recorrerem tot l'estring amb un while fins trobar una "a" o "A", cuan la trobem acaba el bucle i guardem la posicio. Si acaba de recorrer l'estring tambe acaba el bucle 
    var seguirRecorrentCadena = true;
    var lengthInput1 = (input1).length;
    var i = 0;
    var primeraPosicio = "No s'ha trobat ninguna 'a'"; //Per defecte tindra un string que indica que no s'ha trobat la posicio, d'aquesta manera si no troba ninguna "a" es mostrara el missatge

    while(seguirRecorrentCadena){
      if(input1.charAt(i).toLowerCase()=="a"){
        primeraPosicio = i+1;
        seguirRecorrentCadena = false;
      }
      if(lengthInput1==(i+1)){
        seguirRecorrentCadena = false;
      }
      i++;
    }

    //Si no s'ha trobat ninguna "a" avans vol dir que tampoc la trobarem inversament
    if(isNaN(primeraPosicio)){
      resultatFinal = primeraPosicio;
    }
    //En cas contrari busquem la primera "a" a la inversa
    else{
      //Recorrem tot l'estring de manera inversa fins trobar la primera "a". Igual que avans pero de manera inversa
      var seguirRecorrentCadenaInversament = true;
      var j = lengthInput1-1;
      var ultimaPosicio = -1;

      while(seguirRecorrentCadenaInversament){
        if(input1.charAt(j).toLowerCase()=="a"){
          ultimaPosicio = j+1;
          seguirRecorrentCadenaInversament = false;
        }
        if(j==0){
          seguirRecorrentCadenaInversament = false;
        }
        j--;
      }
      resultatFinal = "La posicio de la primera 'a' es: "+primeraPosicio+"\n\nLa posicio de la darrera 'a' es: "+ultimaPosicio;
    }
    
    document.getElementById("results").innerHTML = resultatFinal;
  }
}
