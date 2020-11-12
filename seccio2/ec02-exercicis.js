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

  var arrayLongitudStrArr = contingutCasellaToArray.map(function (str){
    return str.length;
  });

  pintarResultats(arrayLongitudStrArr);
}

//Funcio per exercici 6
function strCreaFraseGuions(){
  
  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  var arrayAmbGuions = contingutCasellaToArray.map(function (str, index, array){
    if(index != array.length-1){
      return str+"-";
    }
    else{
      return str;
    }
  });

  //Pintam array
  arrayAmbGuions.forEach(elementArray => {
    document.getElementById("results").innerHTML += elementArray;
  });
}

//Funcio per exercici 7
function strCreaAcronim(){

  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  var arrayAcronim = contingutCasellaToArray.map(function (str){
    return str.slice(0, 1).toUpperCase();
  });

  //Pintam array
  arrayAcronim.forEach(elementArray => {
    document.getElementById("results").innerHTML += elementArray;
  });
}

//Funcio per exercici 8
function strFiltreLongitud(){

  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  let arrayAcronim = contingutCasellaToArray.filter(function (str){
    return str.length > 5;
  });

  pintarResultats(arrayAcronim);
}

//Funcio per exercici 9
function numSumaForeach(){
  
  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  let sumaTotal = 0;

  contingutCasellaToArray.forEach(element => {
    sumaTotal += parseInt(element);
  });

  pintarResultats(sumaTotal);
}

//Funcio per exercici 10
function strOcurrencies(){
  
  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  let numOcc = 0;

  contingutCasellaToArray.forEach(element => {
    if(element == "la")
    numOcc++;    
  });

  pintarResultats(numOcc);

}

//Funcio per exercici 11
function numSumaReduce(){
  
  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  let sum = contingutCasellaToArray.reduce(function (a, b){
    return parseInt(a) + parseInt(b);
  });

  pintarResultats(sum);
}

//Funcio per exercici 12
function numMaxForeach(){

  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  let valorMesAlt = 0;

  contingutCasellaToArray.forEach(element => {
    element = parseInt(element);
    if(element > valorMesAlt)
      valorMesAlt = element;
  });

  pintarResultats(valorMesAlt);

}

//Funcio per exercici 13
function restructuraArray(){
  
  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  //Agafem el primer i s'ultim element
  let arrPrimerElement = contingutCasellaToArray[0];
  let arrUltimElement = contingutCasellaToArray[contingutCasellaToArray.length-1];
  
  //Guardem a un nou array, el array retallat
  let arrayRetallat = contingutCasellaToArray.slice(1, contingutCasellaToArray.length-1);

  //Agafem la primera i segona meitat 
  let arrPrimeraMeitat = arrayRetallat.slice(0, arrayRetallat.length/2);
  let arrSegonaMeitat = arrayRetallat.slice(arrayRetallat.length/2, arrayRetallat.length);

  //Contatenem array
  let arrFinal = arrPrimeraMeitat.concat(arrPrimerElement).concat(arrUltimElement).concat(arrSegonaMeitat);

  pintarResultats(arrFinal);

}

//Funcio per exercici 14
function capCuaArray(){

  let contingutCasella = document.getElementById("input1").value;
  let contingutCasellaToArray = stringToArray(contingutCasella);

  let arrPrimers3 = contingutCasellaToArray.slice(0, 3);
  let arrSeguents = contingutCasellaToArray.slice(3);
  
  arrPrimers3.sort(function(a, b){return b - a});

  pintarResultats(arrSeguents.concat(arrPrimers3));
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

  //Exercici 6 - Escriu un codi JS que una funció que, en passar-li un array de paraules, crei un String amb aquestes paraules separades per estais, però sense afegir guions al principi i al final del String
  document.getElementById("strCreaFraseGuions").addEventListener("click", strCreaFraseGuions);

  //Exercici 7 - Fer un codi que agafi totes les paraules d’un Array de Strings i construeixi un acrònim en majúscules.
  document.getElementById("strCreaAcronim").addEventListener("click", strCreaAcronim)

  //Exercici 8 - Escriu un codi JS que elimini d’un Array de Strings tots aquells elements que tenguin una longitud inferior a 5
  document.getElementById("strFiltreLongitud").addEventListener("click", strFiltreLongitud);

  //Exercici 9 - Obtén la suma total d’un array de números emprant el mètode forEach()
  document.getElementById("numSumaForeach").addEventListener("click", numSumaForeach);

  //Exercici 10 - Escriu un codi JS que calculi el número de vegades que apareix exactament l’string  “la” en un array. Exemple:  [“la”, “o”, “lama”, “t”, “la”, “bela”] → 2
  document.getElementById("strOcurrencies").addEventListener("click", strOcurrencies);

  //Exercici 11 - Obtén la suma total d’un array de números emprant el mètode reduce()
  document.getElementById("numSumaReduce").addEventListener("click", numSumaReduce)

  //Exercici 12 - Obté el valor numèric més alt d’un array emprant forEach
  document.getElementById("numMaxForeach").addEventListener("click", numMaxForeach)

  //Exercici 13 - Escriu un codi JS que creï un Array nou agafant el primer i el darrer element d’un Array i col·locant-los al centre de l’Array. (Per fer aquest exercici, donarem per suposat que sempre se tractarà d’un Array amb un número parell de posicions)
  document.getElementById("restructuraArray").addEventListener("click", restructuraArray);

  //Exercici 14 - Escriu un codi JS que donat un array de números, retalli els tres primers elements de l’array i els col·loqui al final en ordre invertit. Exemple:  [1,5,8,3,4]  → [3,4,8,5,1]
  document.getElementById("capCuaArray").addEventListener("click", capCuaArray);
}