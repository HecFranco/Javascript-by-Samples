'use strict' 
// Tablicar de un numero introducido por pantalla 
var number = parseInt(prompt('Oe que numero quieres la tablar?', i)); 
document.write("<h1>Tabla del "+numero+"</h1>"); 
for(var i = 1; i <= 10; i++){ 
  document.write(i+" x "+number+" = "+(i*number)+"<br/>"); 
} 
// Todas las tablas de multiplicar 
for(var c = 1; c <= 10; c++){ 
  document.write("<h1>Tabla del "+c+"</hl>"); 
  for(var i = 1; i <= 10; i++){ 
    document.write(i+" x "+c+" = "+(i*c)+"<br/>"); 
  }
}