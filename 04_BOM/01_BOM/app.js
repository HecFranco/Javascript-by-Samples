var window_element = window;
console.log(window_element);
var location_element = window.location;
console.log(location_element);
var navigator_element = window.navigator;
console.log(navigator_element);
var screen_element = window.screen;
console.log(screen_element);
var history_element = window.history;
console.log(history_element);

console.log("Window Properties");

var window_innerWidth = window.innerWidth;      // returns to the width of the viewport
console.log('The width of the viewport = ' + window_innerWidth);

var window_innerHeight = window.innerHeight;    // returns the height of the viewport
console.log('The height of the viewport = ' + window_innerHeight);

var window_outerWidth = window.outerWidth;      // returns the width of the browser
console.log('The width of the browser = ' + window_outerWidth);

var window_outerHeight = window.outerHeight;    // returns the height of the browser
console.log('The height of the browser = ' + window_outerHeight);

var window_pageXOffset = window.pageXOffset;    // scroll on the X axis
console.log('Scroll on the X axis = ' + window_pageXOffset);

var window_pageYOffset = window.pageYOffset;    // scroll on the X axis
console.log('Scroll on the Y axis = ' + window_pageYOffset);

var window_pageYOffset = window.pageYOffset;    // scroll on the X axis
console.log('Scroll on the Y axis = ' + window_pageYOffset);

// Indigenous the position of the browser window regarding the screen
var screenX = window.screenX; 
console.log(screenX);
var screenY = window.screenY;
console.log(screenY);

alert('warning message');         // show a message
prompt('What is your name?');     // asks the user for information and returns it
confirm('Accept or cancel');      // makes a query to the user and returns a boolean

function openWin() {
  myWindow = window.open("", "myWindow", "width=200, height=100");   // Opens a new window
}

function closeWin() {
  myWindow.close();                                         // Closes the new window
}

moveTo(500, 100);                                           // move the window

function moveWin() {
  myWindow.moveTo(500, 100);                                // Moves the new window    
  myWindow.focus();                                         // Sets focus to the new window
}

function openWin() {
  myWindow = window.open("", "", "width=100, height=100");  // Opens a new window
}

function resizeWin() {
  myWindow.resizeTo(250, 250);                              // Resizes the new window
  myWindow.focus();                                         // Sets focus to the new window
}

window.scrollTo(500, 0);                                    // scrolls the document to the specified coordinates.
window.scrollBy(100, 0);                                    // Scroll 100px to the right


window.print();                                             // prints the contents of the current window.

var user = prompt('Write your name');
var userE1 = document.createElement('div');
userE1.textContent = 'Wellcome ' + user;
document.body.appendChild(userE1);


var button = document.getElementById('button');

button.addEventListener('click',function(){
  var myWindow = open('http://google.es');
});