## KEYBOARD EVENTS

* `keydown`, when a key is pressed (before releasing it)
* `keyup`, when a key is released
* `keypress`, when you press a key that prints a character

### Exercise: Know which key was pressed
_[05_keyboard_events.js](./05_keyboard_events.js)_
```js
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
```

![key-event-a-b-c.gif](../99_Readme_Resources/02_Events/key-event-a-b-c.gif)

### Exercise: two-key keyboard shortcuts

// y ->	89
_[05_keyboard_events.js](./05_keyboard_events.js)_
```js
(function(){
  'use strict';
  addEventListener('keydown', function(e){
    // console.log(e.which);
    if(e.ctrlKey === true && e.altKey === true && e.which === 89){
      alert("Welcome to the game");
    }
  });
})();
```

![key-event-ctrl-alt-y.gif](../99_Readme_Resources/02_Events/key-event-ctrl-alt-y.gif)

### Exercise: keylogger
_[05_keyboard_events.js](./05_keyboard_events.js)_
```js
(function(){
  'use strict';
  var keylogger = document.getElementById('keylogger');
  var keylog = "";
  keylogger.addEventListener('keyup', function(){
    keylog = this.value;
    console.log(keylog);
  });
})();
```