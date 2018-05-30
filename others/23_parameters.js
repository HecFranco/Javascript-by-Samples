'use strict' 
// Parametros REST y SPREAD 
function listadoFrutas(frutal, fruta2, ...resto_de_frutas){ 
  console.log("Fruta 1: ", frutal); 
  console.log("Fruta 2: ", fruta2); 
  console. log(resto_de_frutas); 
} 
listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco"); 

var frutas = ["Naranja", "Manzana"]; 
listadoFrutas( ...frutas, "Sandia", "Pera", "Melon", "Coco"); 

// Fruta 1:  Naranja
// Fruta 2:  Manzana
// (4) ["Sandia", "Pera", "Melon", "Coco"]
// Fruta 1:  Naranja
// Fruta 2:  Manzana
// (4) ["Sandia", "Pera", "Melon", "Coco"]