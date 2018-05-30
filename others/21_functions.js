'use strict' 
// Funciones 
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones 
// Defino la funciOn 
function calculadora(number1, number2, show = false){ 
  if(show==false){
    // Conjunto de instrucciones a ejecutar 
    console.log("Hola soy la calculadora"); 
    console.log("Si soy yo"); 
    console.log("Suma: " + (number1+number2)); 
    console.log("Resta: " + (number1-number2)); 
    console.log("Multiplicacion: " + (number1*number2)); 
    console.log("Division: " + (number1/number2)); 
  }else{
    // Conjunto de instrucciones a ejecutar 
    document.write("Hola soy la calculadora/n"); 
    document.write("Si soy yo/n"); 
    document.write("Suma: " + (number1+number2)+"/n"); 
    document.write("Resta: " + (number1-number2)+"/n"); 
    document.write("Multiplicacion: " + (number1*number2)+"/n"); 
    document.write("Division: " + (number1/number2)+"/n"); 
  }
} 

// Invocar o llamar a la funcion 
calculadora(1,4); 
calculadora(1,4,false); 

