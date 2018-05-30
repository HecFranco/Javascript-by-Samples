(function(){
  'use strict';
  var draw = function(e){
    var point = document.createElement('div');
    point.classList.add('point');
    point.style.left = (e.pageX - 10) + 'px';
    point.style.top = (e.pageY - 10) + 'px';
    point.style.background = 'tomato';
    document.body.appendChild(point);
  };
  addEventListener('mousedown', function(){
    addEventListener('mousemove', draw);
    addEventListener('mouseup', function(){
        removeEventListener('mousemove', draw);
    });
  });
})();