var father = document.getElementById('father');
var position_father = father.getBoundingClientRect();

console.log(position_father);

var son1 = document.getElementById('son1');
var son2 = document.getElementById('son2');

var buttonRed = document.getElementById('red');
buttonRed.addEventListener('click', function(){
  document.body.classList.toggle('red');
});

