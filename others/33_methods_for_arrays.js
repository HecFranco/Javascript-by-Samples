'use strict' 
// Arrays, Arreglos, Matrices 
var name = "Victor Robles"; 
var names = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true]; 
var languages = new Array("PHP", "JS", "Go", "Java"); 

console.log(names.length); 
var element = parseInt(prompt("Que element() del array quieres??", 0));
if(element >= names.length){
  alert("Give to the correct name " + names.length);
}else{
  alert("The user selected is: " + names[element]); 
}

document.write("<h1>Programming languages</h1>");
document.write("<ul>");
for(var i = 0 ; i < languages.length ; i++){
  document.write("<li>"+languages[i]+"</li>");
}
document.write("</ul>");

document.write("<ul>");
languages.forEach((element, index)=>{
  document.write("<li>"+element+" - "+languages[index]+"</li>");
});
document.write("</ul>");

document.write("<ul>");
for(let language in languages){
  document.write("<li>"+languages[language]+"</li>");
}
document.write("</ul>");