# 03 DOM - Create and Remove Elements

In this sample we will create and remove elements in the DOM.

Summary steps:

- Install the demo
- Follow the instructions, modifying the indicated files.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Execute in the console the command `npm install`.


* To create an element, we will used `document.createElement('element')`.

* To create the element and I put it in a variable, we will used `var div = document.createElement('div');`

* To add the text to the element, we will used `div.textContent = "This is a new div";`.

* There are two ways to add an id to the element: `div.id = "myDiv";` or `div.setAttribute('id','myDiv');`.

* To add a class we use `className` and **not** `.class` only `div.className="NewDiv";`

```js
var link = document.createElement('a');
link.textContent = "Ir a Escuela Digital";
link.href = "http://escuela.digital";
link.target = "_blank";
```

* To insert elements we use the method `.appendChild ()`. This method is applied to the parent element and receives as parameter an element. This method inserts the element at the end of the parent.

```js
document.body.appendChild(div);
div.appendChild(link);
```


// Eliminar elementos
// se usa el método padre.removeChild(hijo);


var padre = document.getElementById('padre');
var hijo1 = document.getElementById('hijo1');
var hijo2 = document.getElementById('hijo2');




// Insert before: inserta elementos antes de otro
// padre.insertBefore(nuevo,siguiente)


// padre.appendChild(link);
padre.insertBefore(link,hijo2);


