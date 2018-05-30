'use strict' 
/*
  Calculadora: 
  - Pida dos numeros por pantalla 
  - Si metemos uno mal que nos los vuelva a pedir 
  - En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multipicar y dividir esas dos cifras 
*/
var number1 = parseInt(prompt('Introduce el primer numero', 0)); 
var number2 = parseInt(prompt('Introduce el segundo numero', 0)); 
while(number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)){ 
  number1 = parseInt(prompt('Introduce el primer numero', 0));
  number2 = parseInt(prompt('Introduce el segundo numero', 0)); 
} 
var resultado = "La suma es: "+(number1+number2)+"<br/>"+
                "La resta es: "+(number1-number2)+"<br/>"+ 
                "La multiplicacian es: "+(number1*number2)+"<br/>"+
                "La division es: "+(number1/number2)+"<br/>"; 
var resultadoCMD = "La suma es: "+(number1+number2)+"\n"+
                "La resta es: "+(number1-number2)+"\n"+
                "La multiplicaciOn es: "+(number1*number2)+"\n"+
                "La divisiOn es: "+(number1/number2)+"\n"; 

document.write(resultado); 
alert(resultadoCMD); 
console.log(resultadoCMD);
