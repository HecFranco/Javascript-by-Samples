'use strict' 


var films = "La verdad duele, La vida es bella, Gran torino"; 
var films_array = films.split(", ");
console.log(films_array); 

var categories = ['Accion', 'Terror', 'Comedia']; 

var new_categories1 = categories.sort();
console.log(new_categories1); 
var new_categories2 = categories.reverse();
console.log(new_categories2);