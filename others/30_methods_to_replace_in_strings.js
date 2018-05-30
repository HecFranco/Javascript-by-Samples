'use strict' 
// Transformacion de textos 
var number = 444; 
var text1 = "Welcome to the course Victor Robles JavaScript course"; 
var text2 = "It is very good course"; 

var search = text1.replace("JavaScript", "Symfony");
console.log(search);
var search = text1.slice(14);
console.log(search);
var search = text1.slice(14, 22);
console.log(search);
var search = text1.splite();
console.log(search);
var search = text1.splite(" ");
console.log(search);

var text1 = "   Welcome to the course Victor Robles JavaScript course   "; 
var search = text1.trim();
console.log(search);