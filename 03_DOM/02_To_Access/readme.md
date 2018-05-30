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
++    <script src="02_toAccess.js"></script>
  </body>
</html>
```

_[02_toAccess.js](./02_toAccess.js)
```js
var paragraph = document.getElementById('paragraph');
var links = document.getElementsByTagName('a');
var paragraphs = document.getElementsByClassName('paragraph');
```

With `querySelector` you can use any valid CSS selector. The only difference is that `querySelector` returns only one element, and `querySelectorAll` returns an array with all the results.

_[02_toAccess.js](./02_toAccess.js)_
```js
var paragraphs = document.querySelectorAll('p');
var firstParagraph = paragraphs[0];

var firstParragraph = document.querySelector('p');
var paragraph = document.querySelector('#paragraph1');
```

### ACCESS THE ATTRIBUTES

We have two ways:
* **method**        `.getAttribute('attribute')`, returns the value of the searched attribute
* **property**      `.attributes`, returns an object with all the attributes of the element.

Both apply to elements.

_[02_toAccess.js](./02_toAccess.js)_
```js
console.log(paragraph.attributes);
console.log(paragraph.getAttribute('id'));
```

### ACCESS THE NODES TEXT
  
Two forms:
* **property**      `.textContent`
* **property**      `.value` (for the elements that have value as input, button, textarea, etc)

Both properties return the text, however they can be use also to set a new text.

