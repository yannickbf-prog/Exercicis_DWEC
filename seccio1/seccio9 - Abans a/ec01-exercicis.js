
function es_numero() {

  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Recorrerem tot l'estring amb un while i guardarem a una variable es caracters que anem recorrent si trobem una "a" o "A" en una posicio i+1 o hem recorregut tota la cadena acabarem es bucle
    var seguirRecorrentCadena = true;
    var lengthInput1 = (input1).length;
    var i = 0;
    var stringFinal = "";
    //Si la primera lletra es una "a" o una "A" directament no entrarem al while
    if(input1.charAt(0).toLowerCase() != "a"){
      while(seguirRecorrentCadena){
        if(input1.charAt(i+1).toLowerCase()=="a"){
          seguirRecorrentCadena = false;
        }
        if(lengthInput1==(i+1)){
          seguirRecorrentCadena = false;
        }
        stringFinal += input1.charAt(i);
        i++;
      }
    }
    
    document.getElementById("results").innerHTML = stringFinal;
  }
}
