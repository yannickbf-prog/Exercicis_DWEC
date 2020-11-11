//Funcio per pasar string a array
function stringToArray(string){
 return string.split(",");
}

//Funcio per pasar array a string
function arrayToString(array){
  return array.toString();
}

//Funcio per pintar resultats
function pintarResultats(strResultats){
  document.getElementById("results").innerHTML = strResultats;
}

//Funcio per exercici 1 
function strOrdenaMajor(){
  var contingutCasella = document.getElementById("input1").value;
  var contingutCasellaToArray = stringToArray(contingutCasella);
  var ordenarAlfabeticament = contingutCasellaToArray.sort();
  pintarResultats(ordenarAlfabeticament);
}

//Funcio per exercici 2
function numOrdenaMajor(){
  var contingutCasella = document.getElementById("input1").value;
  var contingutCasellaToArray = stringToArray(contingutCasella);
  var ordenarMenorMajor = contingutCasellaToArray.sort();
  pintarResultats(ordenarMenorMajor);
}

//Funcio per exercici 3
function numOrdenaMenor(){
  var contingutCasella = document.getElementById("input1").value;
  var contingutCasellaToArray = stringToArray(contingutCasella);
  var ordenarMajorMenor = contingutCasellaToArray.sort(function(a, b){return b - a});
  pintarResultats(ordenarMajorMenor);
}

//Funcio per exercici 4
function strOrdenaPerLong(){

  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  let arrayOrdenat = contingutCasellaToArray.sort(function(a, b) {
    //return a.lenght - b.length (no va)
    /*Canvio a operador ternari
    if(a > b){
      return 1;
    }
    else{
      return -1;
    }
    */
    let resultat = a > b ? 1 : -1;
    return resultat;
  });

  pintarResultats(arrayOrdenat);
}

//Funcio per exercici 5
//No funciona no se perque
function strArrayLongituds(){

  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  var arrayLongitudStrArr = contingutCasellaToArray.map(agafarLongitud);

  function agafarLongitud(str) {
    return str.lenght;
  }

  console.log(arrayLongitudStrArr);
}

/**
 * Carreguem els listeners cuan es carrega sa pagina
 */
window.onload = function () {

  //Exercici 1 - Crea un codi JS que ordeni un Array de Strings alfabèticament
  document.getElementById("strOrdenaMajor").addEventListener("click", strOrdenaMajor);

  //Exercici 2 - Ordena de menor a major un array de números
  document.getElementById("numOrdenaMajor").addEventListener("click", numOrdenaMajor);

  //Exercici 3 - Ordena de major a menor un array de números
  document.getElementById("numOrdenaMenor").addEventListener("click", numOrdenaMenor);

  //Exercici 4 - Crea un codi JS que ordeni un Array de Strings de manera que aquells elements amb strings més llargs estiguin davant
  document.getElementById("strOrdenaPerLong").addEventListener("click", strOrdenaPerLong);

  //Exercici 5 - Crea un codi JS que a partir d’un Array de Strings obtengui un array paral·lel amb les longituts dels elements. 
  document.getElementById("strArrayLongituds").addEventListener("click", strArrayLongituds);
}