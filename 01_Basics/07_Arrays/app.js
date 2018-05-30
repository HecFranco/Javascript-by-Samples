let arr = [1,'2',3,4,'true',5,6]; 
console.log(arr);

console.log(arr.length);
console.log(arr.greeting);    // undefined

Array.prototype.greeting = 'Hello';
console.log(arr.greeting);    // Hello

console.log(arr[4]);

// .indexOf()
console.log(arr.indexOf(2));    // -1 (No exist)
console.log(arr.indexOf('2'));  // 1  (position 1)


// Exercise
let arr = [1,'2',3,4,'true',5,6];
let sum = 0;
for (let index = 0 ; index < arr.length; index++){
  let element = arr[index];
  if ( typeof element == 'number' ) {
    sum += element;
  }
}

arr = [1,'2',3,4,'true',5,6];
sum = 0;
for (let index = 0 ; index < arr.length; index++){
  let element = arr[index];
  if ( typeof element != 'number' ) continue;
  sum += element;
}

Array.prototype.greeting = 'Hello';
console.log( arr.greeting );


// .push()
let arr = [1,'2',3,4,'true',5,6]; 
console.log( arr.push('javascript','php') );    // [1, "2", 3, 4, "true", 5, 6, "javascript", "php", "java"]

// .unshift()
let arr = [1,'2',3,4,'true',5,6]; 
console.log( arr.unshift('php','java') );       // ["php", "java", 1, "2", 3, 4, "true", 5, 6]

// .pop()
let arr = [1,'2',3,4,'true',5,6];    
console.log( arr.pop() );           // 6
console.log(arr);                   // [1,'2',3,4,'true',5]

// .shift()
let arr = [1,'2',3,4,'true',5,6]; 
console.log( arr.shift() );         // 1
console.log(arr);                   // ['2',3,4,'true',5,6]

// .join('separator')
let arr = [1,'2',3,4,'true',5,6]; 
console.log(arr);                   // [1, "2", 3, 4, "true", 5, 6] (array)
console.log( arr.join() );                // 1,2,3,4,true,5,6 (string)
console.log( arr.join('_') );               // 1_2_3_4_true_5_6 (string)

// .splice(a,b,items)   add or remove elements
let arr = [1,'2',3,4,'true',5,6]; 
console.log(arr);                   // [1, "2", 3, 4, "true", 5, 6] (array)
console.log( arr.splice(2,1) );                   // [1, "2", 4, "true", 5, 6]

let arr = [1,'2',3,4,'true',5,6]; 
console.log(arr);                                       // [1, "2", 3, 4, "true", 5, 6] (array)
console.log( arr.splice(2,2,'new', 'element',1) );      // [1, "2", "new", "element", 1, "true", 5, 6]

// .slice(a,b)   add or remove elements
let arr = [1,'2',3,4,'true',5,6]; 
console.log( arr );                                     // [1, "2", 3, 4, "true", 5, 6] (array)
console.log( arr.slice(3,5) );                          // [4, "true"]

let arr = [1,'2',3,4,'true',5,6]; 
console.log(arr);                                       // [1, "2", 3, 4, "true", 5, 6] (array)
console.log( arr.slice(2,2,'new', 'element',1) );      // [1, "2", "new", "element", 1, "true", 5, 6]



//ES6

// iterator -> they are objects that contain a method next()
// That method return the object with two propierties
// value, done

// .keys(), .values(), .entries()
let arr = [1,2,3,4,5];
let iterator = arr.keys();
console.log( iterator.next() );     // 0
console.log( iterator.next() );     // 1
console.log( iterator.next() );     // 2
console.log( iterator.next() );     // 3
console.log( iterator.next() );     // 4
console.log( iterator.next() );     // undefined

let iterator = arr.entries();
console.log( iterator.next() );     // 0 -> 1
console.log( iterator.next() );     // 1 -> 2
console.log( iterator.next() );     // 2 -> 3
console.log( iterator.next() );     // 3 -> 4
console.log( iterator.next() );     // 4 -> 5
console.log( iterator.next() );     // undefined

//. find(cb)
let arr = [1,2,3,4,5];
let num = arr.find( element => element > 3);
console.log(num);                             // 4
let numIndex = arr.findIndex( element => element > 3);
console.log(numIndex); 

Array.find(cb);

// .map(), .filter(), .reduce()
let students = [
  {
    name: 'Pedro',
    point: 12
  },
  {
    name: 'Luis',
    point: 6
  },
  {
    name: 'Manolo',
    point: 4
  },
];
console.log(students[0].name);

// ES5
var studentsName = [];
for ( var i = 0 ; i < students.length ; i++ ) {
  studentsName.push(students[i].name)
}
console.log(studentsName);

// ES6
studentsName = students.map( students => students.name );
console.log(studentsName);

var studentsApproved = students.filter( students => students.point > 5 );
console.log(studentsApproved);

var studentsApprovedNames = studentsApproved.map( students => students.name );
console.log(studentsApprovedNames);

// .reduce( cb ( prev, current [ , i, arr ]) [, initial])
let numbers = [2,4,6,8,10];
let add = numbers.reduce( (a, b) => a + b);
console.log(add);

let max = numbers.reduce( (a, b) => a > b ? a : b );
console.log(max);

let average = numbers.reduce ( ( a, b, i, arr) => {
  b += a;
  return i == arr.length -1 ? b/arr.length : b ;
})
console.log(average);

let bestStudent = students.reduce ((a,b) =>
  a.point > b.point ? a.name : b.name
);
console.log(bestStudent);