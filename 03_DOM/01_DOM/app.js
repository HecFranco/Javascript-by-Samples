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



console.log(links[0]); // returns the first link
console.log(links['first']); // returns the element with the id "first"
console.log(links.first); // returns the element with the id "first"