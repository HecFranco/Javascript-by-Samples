'use strict' 

/* 
  1. Order 6 numbers per screen and place them in an array
  2. Display the entire array (all its elements) in the body of the page and in the console
  3. Sort and show it
  4. Reverse your order and show it
  5. Show how many elements the array has
  6. Search of a value entered by the user, that tells us if it finds it and its index (the use of functions will be valued)
*/

// Show in the body of the page
function showArray(elements, customText = ""){ 
  document.write("<h1>Content of array "+customText+"</hl>"); 
  document.write("<ul>"); 
  elements.forEach((element, index) => { 
    document.write("<li>"+element+"</li><br/>"); 
  }); 
  document.write("</ul>"); 
} 

// Order 6 numbers
var numbers = []; 
for(var i = 0; i <= 5; i++){ 
  numbers.push(parseInt(prompt("Introduce a number", 0)));
} 
// Show in the console
console.log(numbers); 

// Show array in browser
showArray(numbers);

// Show array in browser - Sorted
numbers.sort(function (a,b){return b-a});
showArray(numbers, 'sorted');

// Show array in browser - Reverse
numbers.sort(function (a,b){return a-b});
showArray(numbers, 'reverse');

// How many elements have the array
document.write("<h1>the array content: "+numbers.length+" elements</h1>"); 

// Search 
var search = parseInt(prompt("Search a number", 0)); 
var position = numbers.findIndex( number => number == search); 
if(position && position != -1){ 
  document.write("<hr/><h1>FOUND</h1>"); 
  document.write("<h1>Position of the searching: "+position+"</h1><hr/>"); 
}else{ 
  document.write("<hr/><h1>NOT FOUND</h1><hr/>"); 
}