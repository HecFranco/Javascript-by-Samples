// Example 1 :- contains 5
var numberArray = [1,2,3,4,5,6,7,8,9,10];
//for Version
var hasFive = false;
for (var counter=0; counter < numberArray.length; counter++){
     if (numberArray[counter] === 5){
        hasFive = true;
        break;
     }
}
console.log(hasFive);
//forEach Version
var hasFive1 = false;
numberArray.forEach(number => {
     if (number === 5){
        hasFive1 = true;
     }
})
console.log(hasFive1);
//Some version
var hasFive2 = numberArray.some(number => number === 5);
//es5 version
var hasFive2 = numberArray.some(function(number){
     return number === 5
});
console.log(hasFive2); // logs true
var hasEleven = numberArray.some(number => number === 11);
console.log(hasEleven); // logs false
// Example 2:- Check for someone with java.
var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
var hasJava = persons.some(personObj => personObj.tags.indexOf("java") > -1);
//es5 version
var hasJava = persons.some(function(personObj){
    return personObj.tags.indexOf("java") > -1
});
console.log(hasJava);