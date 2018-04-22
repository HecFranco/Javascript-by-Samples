(function(){
  'use strict';
  var boton = document.getElementById('hour');
  boton.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    console.log(this);
  });
})();

// Exercise: block right click of the page
(function(){
  'use strict';
  window.addEventListener('mousedown', function(e){
    console.log(e.which); // returns the code of the button pressed
    if(e.which === 3) {
      alert("It is forbidden to copy content from this page");
    }
    e.preventDefault();
  });
})();