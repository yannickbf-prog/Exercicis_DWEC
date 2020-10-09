
function es_numero() {

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
