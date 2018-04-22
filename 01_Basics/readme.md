
# QUICK START

## Comments
_[00_quick_start.js](00_quick_start.js)_
```js
// First Comment
/*
 Second Comment
 */
```

## Variables
# OBJECTS

They are collections of data in format: `key: value (key: value)`, separated by commas and enclosed in keys.

_[00_quick_start.js](00_quick_start.js)_
```js
// First Comment
/*
 Second Comment
 */

function c(value){
  console.log(value);
}
```

_[00_quick_start.js](00_quick_start.js)_
```diff
function c(value){
  console.log(value);
}
++ var first_variable = "Hello Javascript";
++ c(first_variable);
```

```bash
$ node 00_quick_start.js



_[01_objets.js](01_objets.js)_
```diff
function c(value){
  console.log(value);
}
++ var miMascota = {
++   tipo: "perro",
++   nombre: "Dino",
++   color: "negro",
++   ladrar: function(){
++     return "Guau, guau";
++   },
```

_[01_objets.js](01_objets.js)_
```diff
  llamar: function(){
    return this.nombre + ", ven aquí";
  }
};
```




/*
Los tipos de datos en JavaScript son objetos. Lo usual es definirlos de manera literal. 
*/

var cadena = "Yo soy un string literal"; //literal
var numero = 10; //literal
var cadena2 = new String("yo soy otro string"); //definido por constructor
var numero2 = new Number(20); //definido por constructor

/*
  Recuperar (get) o definir (set) informacion de un objeto.

  propiedad -> un dato del objeto
  método -> una función del objeto

  Se los llama con sintaxis de punto y el nombre de la clave.

  objeto.propiedad
  objeto.metodo()

  Sin embargo, la misma sintaxis de punto se puede utilizar para definir métodos o propiedades.
*/

console.log(miMascota.nombre);    //get
console.log(miMascota.color);     //get
console.log(miMascota.ladrar());  //get

miMascota.sexo = "macho";
miMascota.raza = "boxer";
miMascota.jugar = function(){
  return this.name + " está jugando";
};