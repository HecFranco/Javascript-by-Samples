## THE EVENT OBJECT 
  
It is an object that contains all the information related to a specific event. If we want to access this object, just pass a parameter to the event handler. This can be called in any way but it is customary to call it "event" or "e".


_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> </head>
    <link rel="stylesheet" href="styles.css">
  <body>
    <h1>JavaScript Events</h1>
    <button id="hour">Tell me the time</button>
--    <script src="01_events.js"></script>
++    <!--<script src="01_events.js"></script>-->
++    <script src="02_event_object.js"></script>
  </body>
</html>
```

### Exercise: click button
_[02_event_object.js](./02_event_object.js)_
```js
(function(){
  'use strict';
  var boton = document.getElementById('hour');
  boton.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    console.log(this);
  });
})();
```
![click-button-hour.gif](../99_Readme_Resources/02_Events/click-button-hour.gif)

A number representing a given button:

0: No button
1: Left button
2: Middle button (if present)
3: Right button
For a mouse configured for left-handed use, the button actions are reversed. In this case, the values are read from right to left.

### Exercise: block right click of the page
_[02_event_object.js](./02_event_object.js)_
```js
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
```

![click-button-right.gif](../99_Readme_Resources/02_Events/click-button-right.gif)
