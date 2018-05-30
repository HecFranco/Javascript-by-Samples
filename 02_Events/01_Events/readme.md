## WHAT IS AN EVENT?

Everything that happens in the application / web page.

For example:
  * That the user clicks
  * That the user plays a video
  * Have the user scroll
  * That the page loads completely

These events are captured by the browser and with JavaScript you can write functions that are executed when they are triggered.

All events are associated with an HTML element. However, it could also be associated with the global object if it is not associated with any element.

To control events, use the `addEventListener` method with the following syntax:

```js
element.addEventListener ('event', eventHandler);
```

`->eventHandler` is a function that is executed when an event is triggered.

The `eventHandler` is executed within `addEventListener`, so it does not require its invocation directly.

_[index.html](./index.html)_
```html
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
    <script src="01_events.js"></script>
  </body>
</html>
```

> When you use the format `(function(){/*.. code ...*/})();`, your code will be executed automatically.

### Exercise: event click alert
_[01_events.js](./01_events.js)_
```js
(function(){
  'use strict';
  var myAlert = function(){
    alert("you clicked");
  };
  addEventListener('click',myAlert); // associated with the global object
})();
```

  ![click-window.gif](../99_Readme_Resources/02_Events/click-window.gif)

### Exercise: event click hour
_[01_events.js](./01_events.js)_
```js
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
```

![click-button.gif](../99_Readme_Resources/02_Events/click-button.gif)

### Exercise: resize window
_[01_events.js](./01_events.js)_
```js
(function(){
  addEventListener('resize', function(){
      var w = window.innerWidth,
      h = window.innerHeight;
      console.log('The window measures' + w + ' x ' + h);
  });
})();
```

![resize-windows.gif](../99_Readme_Resources/02_Events/resize-windows.gif)
