'use strict' 
/* 
  Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales 
*/ 
var number1 = parseInt(prompt('Introduce el primer numero', 0)); 
var number2 = parseInt(prompt('Introduce el segundo numero', 0)); 
console.log(number1, number2); 
if(number1 == number2){ 
  alert("LOS NUMEROS SON IGUALES"); 
}else if(number1 > number2){ 
  alert("EL NUMERO MAYOR ES: " + number1); 
  alert("El NUMERO MENOR ES: " + number2); 
}else if(number2 > number1){ 
  alert("EL NUMERO MAYOR ES: " + number2); 
  alert("EL NUMERO MENOR ES: " + number1); 
}else{ 
  alert("INTRODUCE NUMEROS CORRECTOS"); 
} 