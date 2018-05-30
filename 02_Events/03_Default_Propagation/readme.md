## PROPAGATION OF EVENTS

It means that when an event occurs, it also happens in all its ancestors until it reaches the document.

The `.stopPropagation()` method of the event object stops propagation.

### Exercise: stopPropagation
_[03_default_propagation.js](./03_default_propagation.js)_
```js
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
```

![stopPropagation.gif](../99_Readme_Resources/02_Events/stopPropagation.gif)

## PREVENT DEFAULT

Browsers have a default behavior for certain events. For example, go to a resource when it is clicked, or move the scroll when the keyboard arrows are pressed.

The `preventDefault ()` method of the event object cancels the browser's default behavior.

### Exercise: preventDefault
_[03_default_propagation.js](./03_default_propagation.js)_
```js
(function(){
  'use strict';
  var ed = document.getElementById('Google');
  ed.addEventListener('click', function(e){
    console.log("You will be directed to the Google page");
    e.preventDefault();
  });
})();
```

![preventDefault.gif](../99_Readme_Resources/02_Events/preventDefault.gif)
