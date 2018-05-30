'use strict' 

var languages = new Array("PHP", "JS", "Go", "Java"); 

var search = languages.find(function(language){
  return language =="PHP";
});
console.log(search);

var search = languages.findIndex( languague => language == "JS" );
console.log(search);

var prices = new Array(1, 2, 3, 5, 6, 20, 30); 
var search = prices.some( price => price >= 20 );
console.log(search);
