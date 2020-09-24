/**
/*Exercice 1
**/

for (var i = 1; i<=8; i++){
  var table;
  for (var j = 0; j<= 10; j++){
      if (i > 5 && i < 8){
        table = "";
        console.log('');
      }else {
          table = i*j; 
          console.log(i + ' x ' + j + ' = ' + table);
      }      
  } 
}

/**
/*Exercice 2
**/

var list = document.createElement('ul');
document.body.appendChild(list);
for (var i = 0; i<=10; i++){
    var table;
    table = i * 5;
    var calcs = document.createElement('li');
    calcs.textContent = 5 + 'x' + i + ' = ' + table;
    document.querySelector('ul').appendChild(calcs);
}

/**
/*Exercice 3
**/
var calc = true;
i = 0;
while (calc){
    
    var table = i * 5;
    console.log(5 + 'x' + i + ' = ' + table);
    i ++;
    if (i > 10){
        calc = false;
    }  
}
/**
/*Exercice 4
**/
var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var tabMap = tab.map  ( x => x*5);

console.log(tabMap);

/**
/*Exercice 5
**/

obj = {name :42, 
       age : 42};
for (var key in obj){
  obj[key] = 42*42;
}
 console.log(obj); 

/**
/*Exercice 6
**/

var nbr = [5, 4, 3, 2, 1];
var croissant = false;

while(!croissant){
  var glass;
  for (var i = 0; i<nbr.length; i++){
    while (nbr[i] > nbr[i+1]){
      glass = nbr[i] ;
      nbr[i] = nbr[i+1];
      nbr[i+1] = glass;
      if (nbr[i+1] > table.length){

      }
    }
      croissant = true;
    }
  }
console.log(nbr);

/**
/*Exercice 7
**/
var size = ['XS','S', 'L', 'M', 'XL', 'XXL'];
var tva = [20, 15, 30];
var price = [15, 23, 30, tva];
var cloth = {
't-shirt' : {size : size, price : price[0] * price[3][2]}
}
console.log(cloth['t-shirt'.size]);

/**
*Exercice 8
**/

var select = document.createElement('select');
document.body.appendChild(select);
var date = new Date();
var year = date.getFullYear();
for (var i = 1980; i<=year; i++){
  var option = document.createElement('option');
  option.textContent = i+"";
  option.value = i;
  document.querySelector('select').appendChild(option);
}
