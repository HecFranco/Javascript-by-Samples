/*
* TIMERS
*
* Existen dos métodos del objeto Window para controlar
* la ejecución del código según el tiempo:
*
*   setTimeOut(funcion,delay)
*     funcion -> una función que contiene el código que se ejecutará.
*     delay   -> el tiempo en ms que pasará para que se ejecute la función
*
*   setInterval(funcion,interval)
*     funcion -> una función que contiene el código que se ejecutará.
*     interval -> el tiempo que pasa para que la funcion se ejecute nuevamente
* */
setTimeout(function(){
	alert("su tiempo ha terminado");
},3000);

var contador=1;
setInterval(function(){
	console.log("Me ejecuté "+contador+"veces");
	contador++;
},1000);


(function(){
  'use strict';
  setTimeout(function(){
    console.log("Han pasado 5 segundos")
  }, 5000);
})();

//Ejercicio 0:
var contador = 0;
var myInterval = setInterval(function(){
  console.log("Me ejecuto cada segundo");
  contador++;
  console.log(contador);
  if (contador == 5){
    clearInterval(myInterval);
  }
  console.log("sigo aqui");
},1000);

//Ejercicio2:
var reloj = document.getElementById('reloj');
var getHour = function(){
  var fecha = new Date();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  if(segundos < 10){
    segundos = '0' + segundos;
  }
  reloj.textContent = horas + ':' + minutos + ':' + segundos;
};
setInterval(getHour,1000);

//Ejercicio1:Empezar cuenta regresiva, necesario un boton y un div dónde se aloje el contador
var time=document.getElementById('time'); //input
var timeButton=document.getElementById('timeButton');
var countDown=document.getElementById('countDown');

timeButton.addEventListener('click',function(){
	var timeValue=time.value;
	var contador=timeValue;
	console.log(timeValue);
	setTimeout(function(){
		alert("se ha acabado tu tiempo");
	},timeValue*1000);
	var countDownValue=setInterval(function(){
		if(contador>0){
			contador--;			
			countDown.textContent=contador;
		} else {
			clearInterval(countDownValue);
		}
		console.log(contador);
	},1000);
});
