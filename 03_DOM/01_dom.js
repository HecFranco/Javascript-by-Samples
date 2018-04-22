var css = document.styleSheets;
var title = document.title;
var scripts = document.scripts;
var charset = document.charset;
var url = document.URL;
var domain = document.domain;


var head    = document.head;
var body    = document.body;
var html    = document.documentElement;
var images  = document.images;
var links   = document.links;
var forms   = document.forms;



  console.log(links[0]); // devuelve el primer enlace
  console.log(links['primero']); // devuelve el elemento con el id "primero"
  console.log(links.primero); // devuelve el elemento con el id "primero"