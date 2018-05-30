'use strict' 
// Transformacion de textos 
var number = 444; 
var text1 = "Welcome to the course Victor Robles JavaScript course"; 
var text2 = "It is very good course"; 
var search = text1.indexOf("course");
var search = text1.lastIndexOf("course");
var search = text1.search("course");
var search = text1.match("course");
var search = text1.match(/course/gi);
var search = text1.substr(14,5);
var search = text1.chartAt(44);
var search = text1.startsWith("JavaScript");
var search = text1.endsWith("JavaScript");
var search = text1.includes("JavaScript");