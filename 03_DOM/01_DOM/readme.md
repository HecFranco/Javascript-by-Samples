# 03 DOM - First Steps

In this sample we will select some DOM's elements.

Summary steps:

- Install the demo
- Follow the instructions, modifying the indicated files.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Execute in the console the command `npm install`.

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