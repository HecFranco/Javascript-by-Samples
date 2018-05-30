'use strict' 
var categories = ['Accion', 'Terror', 'Comedia']; 
var films = ['La verdad duele', 'La vida es bella', 'Gran torino']; 
var cine = [categories, films]; 
console.log(cine[0][1]); 
console.log(cine[1][2]);

var element = ""; 
do{ 
  element = prompt("Introduce to pelicula:"); 
  films.push(element); 
}while(element != "ACABAR"); 
films.pop(); 
console. log(films); 

var element1 = ""; 
do{ 
  element1 = prompt("Introduce to pelicula:"); 
  if(element1 != "ACABAR"){
    films.push(element1); 
  }
}while(element1 != "ACABAR"); 
films.pop(); 
console. log(films); 

var index = films.indexOf('Gran torino'); 
if(index > -1){
  films.splice(index, 1); 
} 
var films_string = films.join(); 
console. log(films_string); 
