(function(){
  'use strict';
  addEventListener('keydown', function(e){
    console.log(e);
    // a is 65, b is 66 ...
    switch (e.which) {
      case 65:
        console.log("You pressed the A key");
        break;
      case 66:
        console.log("You pressed the B key");
        break;
      case 67:
        console.log("You pressed the C key");
        break;
      default:
        // statements_def
        break;
    }
  });
})();

(function(){
  'use strict';
  addEventListener('keydown', function(e){
    // console.log(e.which);
    if(e.ctrlKey === true && e.altKey === true && e.which === 89){
      alert("Welcome to the game");
    }
  });
})();


(function(){
  'use strict';
  var keylogger = document.getElementById('keylogger');
  var keylog = "";
  keylogger.addEventListener('keyup', function(){
    keylog = this.value;
    console.log(keylog);
  });
})();