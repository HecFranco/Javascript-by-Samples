'use strict' 
// callback
function addMe(number1, number2, addAndSample, addForTwo){ 
  var add = number1 + number2; 
  addAndSample(add); 
  addForTwo(add); 
  return add; 
} 

addMe(5, 7, function(date){ 
  console.log("La suma es:", date); 
}, 
function(date){ 
  console.log("La suma por dos es:", (date*2)); 
}) ; 

// La suma es: 12
// La suma por dos es: 24
// 12