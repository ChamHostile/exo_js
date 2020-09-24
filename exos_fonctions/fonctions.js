'use strict';

/**Exo 1
 * myPutStr
 * @param {} string
 * @return console.log(string)
 */
 function myPutStr(string){
     if (typeof string === 'number'){
         return console.log('Et pourquoi pas 42');
     }
     return console.log(string);
 }

 myPutStr(55);

/**Exo2
 * computeSurfaceM2
 * @param {float} length
 * @param {float} width
 * @return {float} length*width
 */
 function computeSurfaceM2(length, width){
    return length * width;     
 }
 computeSurfaceM2(30, 40);

/**Exo3
 * detectMyAgeByNight
 * @param {float} length
 * @param {float} width
 * @return {float} length*width
 */
 function detectMyAgeByNight(){
    var age = parseInt(window.prompt("Age ??"));
    if (age < 18){
        window.alert("Vous etes trop jeunes vous avez " + age);
    }else if (age > 18 && age < 42){
        window.alert("Vous pouveez entrer vous avez "+age);
    }else{
        window.alert("salut patron");
    }
 }
 /**
  *createMyButton 
  */
 function createMyButton(){
    var button = document.createElement("button");
    button.textContent = 'Cliquez ici';
    document.body.appendChild(button);
 }
 createMyButton();
 document.querySelector('button').setAttribute('onclick', 'detectMyAgeByNight()');
 
 /**Exo4
 * matrixGenerator
 */
 function matrixGenerator(){
   var matrix = [[1 , 1 , 1 , 1 , 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]];
   for (var i = 0; i < matrix.length; i++){
     var line = document.createElement('table');
     document.body.appendChild(line);
    for(var j  = 0; j<matrix[i].length; j++){
      var cell = document.createElement('td');
      cell.textContent = matrix[i];
      line.appendChild(cell);     
     }
   }
 }
  matrixGenerator();

 /**Exo5
 * myClock
 */
var clock =  document.createElement('p');
document.body.appendChild(clock); 
function myClock(){
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  clock.textContent = hour + ':' + minutes + ':' + seconds;
}
window.setInterval(function(){
  myClock();
}, 1000);

/**Exo6
 * fibonaccii
 * @param {array} tableau
 * @return {array} newTab
 */

 function fibonacci(tableau){
   var newTab = [];
   for (var i=0; i<tableau.length; i++){
     tableau[i+1] = tableau[i]+tableau[i+1];
   }
   newTab = tableau;
   return newTab;
 }
 var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var suite = fibonacci(tab);
 console.log(suite);

/**
 * listOrder
 * @param {array} tableau
 * @return {array} tableau
 */
function listOrder(tableau){
  for (var i = 0; i < tableau.length; i++) {
      for (var j = 0; j < tableau.length; j++) {
          if (tableau[i] > tableau[j]) {
              var tmp = tableau[i];
              tableau[i] = tableau[j];
              tableau[j] = tmp;
          }
      }
  }
  return tableau;
}

var order = listOrder(suite);

/**
 * sumTab
 * @param {array} tableau
 * @return {0} somme
 */
function sumTab(tableau){
  var somme = 0;
  for (var i = 0; i<tableau.length; i++){
    somme += tableau[i];
  }
  return somme;
}
var mySum = sumTab(order);
console.log(mySum);