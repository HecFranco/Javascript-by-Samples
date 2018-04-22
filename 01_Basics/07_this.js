// THIS
/*****************************************************************/

function c(value){
  console.log(value);
}

/*
 * STRICT MODE
 * It is activated by adding the string "use strict" in
 * the first line of the scope (recommended)
 * that is within a function.
 */

// function greet(){
//   "use strict";
//   var name = "José";
//   return "Hello, " + name;
// }
// greet();
// c("I have executed");


/*
 * THIS is a word that points to an object. 
 * And it will return different values ​​according to the circumstances.
 */

/*
 * CASE 1: THIS WITHIN A FUNCTION
 * If not used, "use strict" returns the global object (window). 
 * If "use stric" is used, it returns undefined
 */

(function test(){
  "use strict";
  c(this);
})();


/*
 * CASE 2: THIS WITHIN A METHOD
 * In this case, this refers to the object.
 */

var person = {
  name: "Carmen",
  age: 25,
  greet: function(){
    return "Hello, my name " + this.nombre + 
      " and I am " + this.edad + " years old.";
  }
};


/*
 * CASE 3: THIS WITHIN AN EVENT HANDLER
 * In this case, this reference to the HTML element that triggered the event.
 */

// var button = document.getElementById("button");

// button.addEventListener('click',function(){
//   alert(this.textContent);
// });

/*
 * CASE 4: THIS WITHIN A BUILDER
 * A constructor is a function that defines the structure of an object 
 * and from which other objects are created (they are instantiated).
 * In this case, this refers to the instantiated object.
 */

function Person(namePerson, agePerson){
  this.name = namePerson;
  this.age = agePerson;
}

var myFriend = new Person("Luis", 30);
c(myFriend);
var myBrother = new Person("Carlos",27);
c(myBrother);
var myGirlFriend = new Person("Vanesa", 32);
c(myGirlFriend);