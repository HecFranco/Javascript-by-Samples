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