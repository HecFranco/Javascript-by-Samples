// MATH
/*****************************************************************/

/*
 * The Math object allows you to work with numbers.
 */

(function(){
  "use strict";
  console.log(Math.PI);
  console.log(Math.E);

  var number = 3.4;

  // the ceil method rounds up
  var result = Math.ceil(number); 
  console.log(result);
  // the floor method rounds down
  result = Math.floor(number);
  console.log(result);
  // the round () method rounds according to the value
  result = Math.round(number);
  console.log(result);
  result = Math.round(3.5);
  console.log(result);
  // min () returns the minimum of a set of parameters
  // max () returns the maximum of a set of parameters
  // abs () returns to absolute value
  // sqrt () returns the square root
  // random () returns a random number between 0 and 1
  var min = 10;
  var max = 18;
  var random = Math.floor(Math.random() * (max-min)) + min;
  console.log(random);

  console.log(Math.min(2,3,4,5,6,99));
})();


// JSON JavaScript Object Notation
/*
 * It is a notation to structure information.
 * It is inspired by JavaScript but it is not JavaScript.
 * It is used to share information.
 * There are databases like MongoDB that use JSON.
 * Although it is based on JavaScript objects, it has
 * two fundamental differences with these:
 *  1. All the keys are enclosed in quotation marks.
 *  2. There are no methods, only properties.
 */