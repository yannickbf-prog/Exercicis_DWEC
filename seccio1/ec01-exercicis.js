
function nombres_strings() {
  input1 = document.getElementById("input1").value;

  if (input1 > 0) {
    document.getElementById("results").innerHTML = "POSITIU"
  } else {
    if (input1 < 0) {
      document.getElementById("results").innerHTML = "NEGATIU"
    } else {
      document.getElementById("results").innerHTML = "ES ZERO"
    }
  }
}

function es_numero() {
  var input1 = document.getElementById("input1").value;

  if(isNaN(input1)){
    document.getElementById("results").innerHTML = "No es un numero";
  }
  else{
    document.getElementById("results").innerHTML = "Si es un numero"
  }
}

function numero_part_entera(){
  var input1 = document.getElementById("input1").value;

  if(!isNaN(input1)){
    document.getElementById("results").innerHTML = Math.trunc(input1);
  }
}

function numero_part_decimal(){
  var input1 = document.getElementById("input1").value;

  //Si es un nombre
  if(!isNaN(input1)){
    //Si es decimal
    if(input1 % 1 != 0){
      //Pasem el nombre a string per recorrer els numeros i quedarnos amb els decimals
      var input1_to_string = (input1).toString();
      //Guardem la longitud del string a una variable
      var input1_to_string_lenght = (input1).toString().length;

      //Busquem el punt
      var seguir_buscant_punt = true;
      var i = 0;
      while(seguir_buscant_punt){
        //Quan trobem el punt guardem a una variable tota la cadena seguent
        //Si trobem el punt
        if(input1_to_string.charAt(i)=="."){
          //Sumem 1 a i per agafar el primer caracter despres del punt
          i++;
          //Creem variable per guardar els numeros que son decimals
          var strNumDecimals = "";

          //Recorrem els caracters a partir del punt i els guardem encadenats en strNumDecimals
          for (i; i< input1_to_string_lenght; i++) {
            var caracter = input1_to_string.charAt(i);
            strNumDecimals += caracter;
          }
          
          //Mostrem strNumDecimals a la pagina (numeros decimals) i parem el bucle while
          document.getElementById("results").innerHTML = strNumDecimals;
          var seguir_buscant_punt = false;
        }
        //Si no hem trobat el punt sumem 1 fins trobarlo
        i++;
      }
    }
  }
}

function numero_3_decimals(){
  var input1 = document.getElementById("input1").value;

  //Si es un nombre
  if(!isNaN(input1)){
  //Guardem a una variable la operacio de divisio mostrant 3 decimals
  var resultat = parseFloat(input1 / 19).toFixed(3);
  //Mostrem resultat
  document.getElementById("results").innerHTML = resultat;
  }
}

function string_buit(){
  var input1 = document.getElementById("input1").value;

  if(input1 == ""){
    document.getElementById("results").innerHTML = "String Buit";
  }
  else{
    document.getElementById("results").innerHTML = "String omplert";
  }
}

function invertir_string(){
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

function cuantes_a(){
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


function abans_a(){
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

function primera_darrera_a(){
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

function esborra_substring(){
  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    document.getElementById("results").innerHTML = input1.replace(/la/gi,"");
  }
}

function substitueix_string(){
  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    document.getElementById("results").innerHTML = input1.replace(/la/gi,"*");
  }
}

function cap_i_cua(){
  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Agafem la primera lletra
    var primeraLletra = input1.charAt(0);
    //Mostrem resultat concatenant com voliem
    document.getElementById("results").innerHTML = primeraLletra+input1+primeraLletra;
  }
}

function no_espais(){
  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    document.getElementById("results").innerHTML = input1.replace(/ /gi,"");
  }
}

function frase_amb_guions(){
  var input1 = document.getElementById("input1").value;

  //Si el imput esta omplert
  if(input1 != ""){
    //Recorrem tot l'estring i copiem a una variable tots els caracters que no siguin un espai, i si son un espai comprobem que no tenen un altre espai darrere seu
    var strFinal = "";
    var lengthInput1 = (input1).length;
    for(var i = 0; i < lengthInput1; i++){
      if(input1.charAt(i) == " "){
        if(input1.charAt(i-1) != " "){
          strFinal += input1.charAt(i);
        }
      }
      else{
        strFinal += input1.charAt(i);
      }
    }
    //Mostrem l'string substituint els espais per guions
    document.getElementById("results").innerHTML = strFinal.replace(/ /gi,"-");
  }
}

function acronim(){
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

function email(){
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