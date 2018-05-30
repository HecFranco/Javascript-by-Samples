// OPERATORS
/*****************************************************************/

function c(value){
  console.log(value);
}

var addition = 6 + 9;
c(addition);
var addition = "Hello " + "world!";
c(addition);

var Subtraction = 9 - 3;
c(Subtraction);
var Multiplication = 8 * 2; // multiply in JS is an asterisk
c(Multiplication);
var Division = 9 / 3;
c(Division);

var Assignment = 'Bob'; 
c(Assignment);

// Equality
var myVariable = 3;
c(myVariable === 4);

// Not
c( !(myVariable === 3) );

// Does-not-equal
!( myVariable !== 3 );
