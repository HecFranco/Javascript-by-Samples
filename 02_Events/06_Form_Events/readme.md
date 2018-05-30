## FORMULARY EVENTS

* `focus`, When a field is activated
* `blur`, When you leave a field
* `change`, When changing the value of a select, input or textarea
* `submit`, When the form is sent (this event is associated with the complete form, not the input submit)

### Exercise: detect the selected option
_[06_form_events.js](06_form_events.js)_
```js
(function(){
  'use strict';
  var pais = document.getElementById('country');
  pais.addEventListener('change', function(){
    console.log('Your country is' + this.value);
  });
})();
```

### Exercise: detect if a checkbox or radio button is selected
_[06_form_events.js](06_form_events.js)_
```js
(function(){
  'use strict';
  var check = document.getElementById('check');
  check.addEventListener('change', function(e){
    if(e.target.checked){
      alert("Thanks for subscribe to our newsletter");
    } else {
      alert("We regret your decision =(");
    }
  });
})();
```