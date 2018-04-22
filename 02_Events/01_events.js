(function(){
  'use strict';
  var myAlert = function(){
    alert("you clicked");
  };
  addEventListener('click',myAlert); // associated with the global object
})();

// Exercise: button that gives the time
(function(){
  'use strict';
  var hourButton = document.getElementById('hour');
  hourButton.addEventListener('click', function(){
    var date     = new Date(),
        hour      = date.getHours(),
        minutes   = date.getMinutes(),
        seconds  = date.getSeconds();
    alert("The current time is " +  hour + ":" + minutes + ":" + seconds);
  });
})();

// Exercise 2: get the size of the window
(function(){
  addEventListener('resize', function(){
      var w = window.innerWidth,
      h = window.innerHeight;
      console.log('The window measures' + w + ' x ' + h);
  });
})();