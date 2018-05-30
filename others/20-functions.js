'use strict' 
// Funciones 
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones 
// Defino la funciOn 
function calculadora(){ 
// Conjunto de instrucciones a ejecutar 
  console.log("Hola soy la calculadora"); 
  console.log("Si soy yo"); 
  console.log("Suma: " + (number1+number2)); 
  console.log("Resta: " + (number1-number2)); 
  console.log("Multiplicacion: " + (number1*number2)); 
  console.log("Division: " + (number1/number2)); 
  // return "Hola soy la calculadora!!"; 
} 

// Invocar o llamar a la funcion 
var resultado = calculadora(); 
console. log(resultado); 

for(var i = 1; i <= 10; i++){ 
  console.log(i);
  calculadora(i, 8); 
} 
