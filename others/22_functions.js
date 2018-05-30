'use strict' 
// Funciones 
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones 
// Defino la función 
function forConsole (number1, number2){
  console.log("Hola soy la calculadora"); 
  console.log("Si soy yo"); 
  console.log("Suma: " + (number1+number2)); 
  console.log("Resta: " + (number1-number2)); 
  console.log("Multiplicacion: " + (number1*number2)); 
  console.log("Division: " + (number1/number2));
}
function forScreen (number1, number2){
  document.write("Hola soy la calculadora/n"); 
  document.write("Si soy yo/n"); 
  document.write("Suma: " + (number1+number2)+"/n"); 
  document.write("Resta: " + (number1-number2)+"/n"); 
  document.write("Multiplicacion: " + (number1*number2)+"/n"); 
  document.write("Division: " + (number1/number2)+"/n"); 
}
function calculator( number1, number2, show = false){ 
  if(show==false){
    // Conjunto de instrucciones a ejecutar 
    forConsole (number1, number2);
  }else{
    // Conjunto de instrucciones a ejecutar 
    forScreen (number1, number2);
  }
} 

// Invocar o llamar a la funcion 
calculator(1, 4); 
calculator(1, 4, false); 

// Hola soy la calculadora
// Si soy yo
// Suma: 5
// Resta: -3
// Multiplicacion: 4
// Division: 0.25
// Hola soy la calculadora
// Si soy yo
// Suma: 5
// Resta: -3
// Multiplicacion: 4
// Division: 0.25