## MOUSE EVENTS

* `mousedown`, when a button is pressed (before releasing it)
* `mouseup`, when a button is released
* `click`, when the left button is pressed
* `dblclick`, when you press the left button twice
* `mousemove`, when the mouse moves
* `mouseenter`, when the mouse enters the element area
* `mouseleave`, when the mouse leaves the element area



### Exercise: drawing program
_[04_mouse_events.js](./04_mouse_events.js)_
```js
(function(){
  'use strict';
  var draw = function(e){
    var point = document.createElement('div');
    punto.classList.add('point');
    punto.style.left = (e.pageX - 10) + 'px';
    punto.style.top = (e.pageY - 10) + 'px';
    punto.style.background = 'tomato';
    document.body.appendChild(point);
  };
  addEventListener('mousedown', function(){
    addEventListener('mousemove', draw);
    addEventListener('mouseup', function(){
        removeEventListener('mousemove', draw);
    });
  });
})();
```