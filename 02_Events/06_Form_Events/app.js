(function(){
  'use strict';
  var pais = document.getElementById('country');
  pais.addEventListener('change', function(){
    console.log('Your countries is ' + this.value);
  });
})();

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
