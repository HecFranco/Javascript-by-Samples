'use strict' 
/* 
  Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario 
*/
var number1 = parseInt(prompt("Introduce el primer numero", 0)); 
var number2 = parseInt(prompt("Introduce el segundo numero", 0)); 
while(number1 < number2){
  number1++; 
  if(number1 % 2 != 0){ 
    console.log("El "+number1+" es impar"); 
  }
}