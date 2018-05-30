/*
* Location da información sobre la URL, y devuelve o siguiente
*
*   .href   -> url completa
*   .hash   -> devuelve el hash
*   .host   -> devuelve la info del host
*   .protocol -> devuelve el protocolo
*   .port     -> devuelve el puerto
*
Ejemplos
location.href 			//"http://escuela.digital/cursos/javascript"
location.pathname		//"/cursos/javascript"
location.origin			//"http://escuela.digital"
location.protocol    	//"http:"
location.host			//"escuela.digital"
location.hostname		//"escuela.digital"
location.hash			//"parrafo" //devuelve los id
location.href="http://google.com"	//me lleva a google.com


setTimeout (function(){
	location.href="http://escueladigital.pe";
},5000)
// me devuelve a esa url en 5000 milisegundos


*   Métodos:
*
*   .assign('url')  -> redirecciona hacia la URL
*   .replace('url') -> redirecciona limpiando el historial
*
* */


(function(){
  var navigate = document.getElementById('navigate');
  navigate.addEventListener('change',function(){
    var destino = this.value + '.html';
    location.href += destino;
  });
})();
