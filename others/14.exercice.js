'use strict' 
/* 
  Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/ 
var number1 = parseInt(prompt("Introduce el primer numero", 0)); 
var number2 = parseInt(prompt("Introduce el segundo numero", 0)); 
document.write("<h1>De"+number1+" a "+number2+" estan estos numeros:</h1>");
for(var i = number1; i <= number2; i++){ 
  document.write(i+"<br/>"); 
} 