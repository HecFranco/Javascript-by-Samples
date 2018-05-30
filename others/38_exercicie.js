'use strict' 
/*  
    1. Pida 6 numeros por pantalla y los meta en un array 
    2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola 
    3. Ordenarlo y mostrarlo 
    4. Invertir su orden y mostrarlo 
    5. Mostrar cuantos elementos tiene el array 
    6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 
(Se valorara el use de funciones) 
*/
// Pedir 6 numeros 
var numeros = []; 
for(i = 0; i <= 5; i++ ){ 
  numeros.push(parseInt(prompt("Introduce un numero", 0))); 
} 
// Mostrar en el cuerpo de la pagina 
document.write(); 
// Mostrar array en la consola 
console.log(numeros); 