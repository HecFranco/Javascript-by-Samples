'use strict' 
// Bucle while 
var year = 2018; 
while(year != 1991){ 
  // ejecuta esto 
  console.log("Estamos en el alio: "+year); 
  year--; 
} 

// Break 
while(year != 1991){ 
  // ejecuta esto 
  console.log("Estamos en el alio: "+year); 
  if(year == 2000){
    break;
  }
  year--; 
} 

// Do while 
var years = 30; 
do{ 
  alert("SOLO CUANDO SEA DIFERENTE A 20, AHORA VALE: "+years); 
  years--; 
}while(years > 25) 

