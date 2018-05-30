'use strict' 
// callback
function addMe(number1, number2, addAndSample, addForTwo){ 
  var add = number1 + number2; 
  addAndSample(add); 
  addForTwo(add); 
  return add; 
} 

addMe(5, 7, date => { 
  console.log("la suma es:", dato); 
}, dato => { 
  console.log("La suma por dos es:", (date*2));
}); 
