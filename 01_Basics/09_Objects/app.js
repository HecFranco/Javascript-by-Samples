// OBJECTS
/*****************************************************************/

function c(value){
  console.log(value);
}

/*
 * They are collections of data in the format: key: 
 * value (key: value) 
 * separated by commas and enclosed in braces.
 */

let myPet = {
  type: "dog",
  name: "Dino",
  colour: "black",
  toBark: function(){
    return "Guau, guau";
  },
  toCall: function(){
    return this.name + ", come here";
  }
};


/*
 * The data types in JavaScript are objects. 
 * The usual thing is to define them literally.
 */

var string = "I am a literal string"; //literal
var number = 10; //literal
var string2 = new String("I am another string"); //defined by constructor
var number2 = new Number(20); //defined by constructor

/*
 * Recover (get) or define (set) information of an object.
 * property -> an object data
 * method -> a function of the object
 * They are called with point syntax and the name of the key.
 * object.property
 * object.method ()
 * However, the same point syntax can be used to define methods or properties.
*/

c(myPet.name);    //get
c(myPet.colour);     //get
c(myPet.toBark());  //get

myPet.sex = "male";
myPet.race = "boxer";
myPet.play = function(){
  return this.name + " is playing";
};

// Operators
// .delete
delete myPet.name;
console.log(myPet);
// .in
console.log('type' in myPet);

Object.prototype.magicNumber = 27;
console.log(myPet);                 // include magicNumber

console.log( myPet.hasOwnProperty('magicNumber') );
console.log( myPet.hasOwnProperty('colour') );

const myPet = {
  type: "dog",
  name: "Dino",
  colour: "black",
  toBark: function(){
    return "Guau, guau";
  },
  toCall: function(){
    return this.name + ", come here";
  }
};

// .assign()
let myPet_extra = Object.assign({}, myPet);
console.log(myPet);
console.log(myPet_extra);

// asignar variables existentes a propiedades
let a = 'hello', b = 'world';
// ES5
let myObj = {
  a: a,
  b: b,
  greeting : function greeting(){}
};

// ES6
let myObj = {
  a,
  b,
  greeting(){}
};

// Expresiones en propiedades
let myObj2 = {
  [a + b]: 'Hello World'
};

console.log(myObj2);

function c(value){
  console.log(value);
};
var miMascota = {
  tipo: "perro",
  nombre: "Dino",
  color: "negro",
  ladrar: function(){
    return "Guau, guau";
  },
  llamar: function(){
    return this.nombre + ", ven aquí";
  }
};
c(miMascota);