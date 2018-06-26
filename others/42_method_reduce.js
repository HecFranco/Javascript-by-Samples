// Example 1 :- sum of array
var numberArray = [1,2,3,4,5,6,7,8,9,10];
//for version
var sum = 0;
for (var counter=0; counter < numberArray.length; counter++){
     sum += numberArray[counter]
}
console.log(sum);
//forEach Version
var sum1 = false;
numberArray.forEach(number => {
     sum1 += number;
})
console.log(sum1);
//Reduce version
var sum2 = numberArray.reduce(((acc, num) => acc + num), 0);
//es5 version
var sum2 = numberArray.reduce(function(acc, num){
   acc += num;
   return acc;
}, 0);
console.log(sum2);
// Example 2:- Check for someone with java.
var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];
var uniqueTags = persons.reduce((acc, personObj) => {
    acc[personObj.tags] = 1;
    return acc;
},{});
//es5 version
var uniqueTags = persons.reduce(function(acc, personObj){
    acc[personObj.tags] = 1;
    return acc;
},{});
console.log(Object.keys(uniqueTags)); // Returns array of unique tags
// Example 3:- getting single list of the cols
var categories = [{
     type : "category1",
     cols : ["col A", "col B"]
}, {
     type : "category2",
     cols : ["col C", "col D", "col E"]
}, {
     type : "category3",
     cols : ["col F"]
}]
var colList = categories.reduce((acc, category) => {
    acc = acc.concat(category.cols);
    return acc;
}, []);
var colList = categories.reduce(function(acc, category){
    acc = acc.concat(category.cols);
    return acc;
}, []);
console.log(colList); //logs ["Col A", "Col B", "Col C", "Col D", "Col E", "Col F"];