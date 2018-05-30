'use strict' 
// Plantillas de texto 
var name = prompt("WRITE YOUR NAME"); 
var surnames = prompt("WRITE YOUR SURNAMES"); 

var text = " Mi nombre es: "+name+" <br/> Mis apellidos son: "+surnames; 
var text = `
  <h1>Hola que tal</h1>
  <h3>Mi nombre es: ${name}</h3> 
  <h3>Mis apellidos son: ${surnames}</h3> 
`
document.write(text); 
