// CONDITIONALS
/*****************************************************************/

function c(value){
  console.log(value);
}
let price = 12;
let iceCream = 'chocolate';
let monIsHere = true;

if (iceCream === 'chocolate' && ( iceCream !== 'pineapple' || price < 12 ) ) {
  c('Yay, I love chocolate ice cream!');    
} else if (iceCream === 'chocolate' && ( iceCream !== 'pineapple' || price > 16 ) ) {
  c('Oooooo........');
  if(monIsHere){
    c('Don`t worry mom is here!!!');
  }
} else {
  c('Awwww, but chocolate is my favorite...');    
}

//Truthy y falsy values
// Truthy : numbers, strings no empty, [], {}, number different zero
// Falsy : 0, string empty, undefined, null, NaN
let price = 12;
if (price) {
  c('the ice-cream isn`t free!!!');
}else{
  c('the ice-cream is free!!!');
}


// switch
switch (age) {
  case '10':
    console.log("You wrote 10");
    break;
  default:
    console.log("You wrote other age");
    break;
}

let prompt = promp(`Search one colour:
  1. Red
  2. Green
  3. Blue`);
switch (prompt){
  case 1:
    console.log("You have selected, red");
    break;
  case 2:
    console.log("You have selected, green");
    break;
  case 3:
    console.log("You have selected, blue");
    break;
  default:
    console.log("select a valid colour");
}

// ternary operator
condition ? valueTrue: valueFalse;
let name = prompt('Write your name');
name.length > 5 ? console.log() : console.log();

if (condition) console.log();