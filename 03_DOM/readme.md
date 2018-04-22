## DOM - DOCUMENT OBJECT MODEL

The DOM is an API to access and manipulate the elements of the HTMl and XML documents.

On the other hand, the DOM can be understood as a tree hierarchical component, in which there are parents, siblings, children, etc. The top-level component in the DOM is document,therefore every time you want to access a component of the DOM, you start with the document.

Each component of the DOM is called a node. And there are several types of nodes:

>  (1) Element -> corresponds to an HTML tag<br>
>  (2) Text -> The text contained within an element<br>
>  (3) Attributes -> The attributes of the elements<br>

The comments are also considered.

We can access elements of the DOM directly with the following properties.

_[01_dom.js](./01_dom.js)_
```js
var css = document.styleSheets;
var title = document.title;
var scripts = document.scripts;
var charset = document.charset;
var url = document.URL;
var domain = document.domain;
```

You can also access HTML elements with properties of the document.

_[01_dom.js](./01_dom.js)_
```js
var head    = document.head;
var body    = document.body;
var html    = document.documentElement;
var images  = document.images;
var links   = document.links;
var forms   = document.forms;
```

The above properties return an array in which it can be searched by index or by id.

_[index.html](./index.html)_
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <a href="#" id="first">Link 1</a>
    <script src="01_dom.js"></script>
  </body>
</html>
```

### Example:
```js
console.log(links[0]); // returns the first link
console.log(links['first']); // returns the element with the id "first"
console.log(links.first); // returns the element with the id "first"
```


## ACCESS ELEMENTS

We have two ways:
  * `getElements` -> get items by name, id, class
  * `querySelector` -> get elements by css selectors

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>DOM</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <a href="#" id="first">Link 1</a>
++    <p id="paragraph1" class="paragraph">Hello World</p>
++    <p class="paragraph">Goodbye world</p>    
--    <script src="01_dom.js"></script>
++    <!--<script src="01_dom.js"></script>-->
++    <script src="02toAccess.js"></script>
  </body>
</html>
```

_[02_toAccess.js](./02_toAccess.js)
```js
var parrafo = document.getElementById('paragraph');
var links = document.getElementsByTagName('a');
var parrafos = document.getElementsByClassName('paragraph');
```

With `querySelector` you can use any valid CSS selector. The only difference is that `querySelector` returns only one element, and `querySelectorAll` returns an array with all the results.

_[02_toAccess.js](./02_toAccess.js)_
```js
var parrafos = document.querySelectorAll('p');
var primerParrafo = parrafos[0];

var primerParrafo = document.querySelector('p');
var parrafo = document.querySelector('#parrafo1');
```

### ACCESS THE ATTRIBUTES

We have two ways:
* **method**        `.getAttribute('attribute')`, returns the value of the searched attribute
* **property**      `.attributes`, returns an object with all the attributes of the element.

Both apply to elements.

_[02_toAccess.js](./02_toAccess.js)_
```js
  console.log(parrafo.attributes);
  console.log(parrafo.getAttribute('id'));
```

### ACCESS THE NODES TEXT
  
Two forms:
* **property**      `.textContent`
* **property**      `.value` (for the elements that have value as input, button, textarea, etc)

Both properties return the text, however they can be use also to set a new text.
