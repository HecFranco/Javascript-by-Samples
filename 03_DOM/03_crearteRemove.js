// document.createElement('element') crea un elemento


//creo el elemento y lo meto en una variable
var div = document.createElement('div');
//añad el texto al elemento
div.textContent = "Este es un div nuevo ";
//asigno un id (hay dos formas)
div.id = "myDiv";
//o se puede usar esta forma
div.setAttribute('id','myDiv');
//Para añadir una clase se usa className y no .class sólo
div.className="NuevoDiv";


var link = document.createElement('a');
link.textContent = "Ir a Escuela Digital";
link.href = "http://escuela.digital";
link.target = "_blank";


// Para insertar elementos usamos el método .appendChild()
// Este método se aplica al elemento padre y recibe como
// parametro un elemento.
// Este método inserta el elemento al final del padre


// document.body.appendChild(div);
// div.appendChild(link);


// Eliminar elementos
// se usa el método padre.removeChild(hijo);


var padre = document.getElementById('padre');
var hijo1 = document.getElementById('hijo1');
var hijo2 = document.getElementById('hijo2');




// Insert before: inserta elementos antes de otro
// padre.insertBefore(nuevo,siguiente)


// padre.appendChild(link);
padre.insertBefore(link,hijo2);


