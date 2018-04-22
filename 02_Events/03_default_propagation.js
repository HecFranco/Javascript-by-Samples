(function(){
  'use strict';
  var container = document.getElementById('container'),
      button = document.getElementById('button');
  button.addEventListener('click', function(e){
    console.log("You clicked on the button");
    e.stopPropagation();
  });
  container.addEventListener('click', function(){
    console.log("You clicked on the container");
  });
})();

(function(){
  'use strict';
  var google = document.getElementById('Google');
  google.addEventListener('click', function(e){
    console.log("You will be directed to the Google page");
    e.preventDefault();
  });
})();