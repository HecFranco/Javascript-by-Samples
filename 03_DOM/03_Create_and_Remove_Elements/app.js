var div = document.createElement('div');
    div.textContent = "This is a new div ";
    div.id = "myDiv";
    div.setAttribute('id','myDiv');
    div.className="NewDiv";

console.log(div);

var link = document.createElement('a');
    link.textContent = "Go to Google!!";
    link.href = "http://google.es";
    link.target = "_blank";

console.log(link);

document.body.appendChild(div);
div.appendChild(link);

var father = document.getElementById('father');
var son1 = document.getElementById('son1');
var son2 = document.getElementById('son2');

father.appendChild(link);
father.insertBefore(link,son2);


