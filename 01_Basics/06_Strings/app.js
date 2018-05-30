let greeting = '     Wellcome to Carolina ';
console.log(greeting);                      //      Wellcome to Carolina 

// .trim()
let greeting_trim = greeting.trim();  
console.log(greeting_trim);                 // Wellcome to Carolina

// .length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log( txt.length );                      // 26 

// .indexOf()
let str = "Please locate where 'locate' occurs!";
console.log( str.indexOf("locate") );           // 7

let str = "Please locate where 'locate' occurs!";
console.log( str.indexOf("locate",15) );        // 21

console.log(greeting_trim.indexOf('lco',2));    // 3

// .lastIndexOf()
let str = "Please locate where 'locate' occurs!";           
console.log( str.lastIndexOf("locate") );         // 21
console.log( greeting_trim.lastIndexOf('i',1) );  // -1

// .split(separator, N)
var txt = "a,b,c,d,e";                    // String
console.log( txt.split(",") );            // Split on commas
console.log( txt.split(" ") );            // Split on spaces
console.log( txt.split("|") );            // Split on pipe

let txt = "Hello";       // String
console.log( txt.split("") );             // Split in characters

let greeting = "Hello World";
console.log( greeting.split(' ',2) );     // ["Hello", "World"]
console.log( greeting.split('',2) );      // ["H", "e"]
console.log( greeting.split('e',2) );     // ["H", "llo World"]

// .substring(a,b), substr(a,b), slice(a,b)
let substring, substr, slice;
let greeting = "Hello World";
console.log( greeting.substring() );        // Hello World
console.log( greeting.substring(4) );       // o World
console.log( greeting.substring(4, 8) );    // o Wo
console.log( greeting.substring(4, -2) );   // Hell
let str = "Apple, Banana, Kiwi";             
console.log( str.substring(7, 13) );        // Banana

let greeting = "Hello World";
console.log( greeting.substr(4, 5) );       // o Wor
console.log( greeting.substr(-4, 5) );      // orld
let str = "Apple, Banana, Kiwi";
console.log(str.substr(7, 6));              // Banana

let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13) );             // Banana
console.log( str.slice(-12, -6) );          // Banana
console.log( str.slice(7) );                // Banana, Kiwi
console.log( str.slice(-12) );              // Banana, Kiwi
console.log( str.slice(4, -2) );            // e, Banana, Ki
console.log( str.slice(-10, -7) );          // nan
let greeting = "Hello World";
console.log(greeting.slice(4,5) );          // o
console.log(greeting.slice(4,-2) );         // o Wor

// .startsWith(), endsWith(), includes()
let greeting = "Hello World";
console.log( greeting.startsWith("He") );   // true
console.log( greeting.startsWith("elio") ); // false

console.log( greeting.endsWith("He") );     // false
console.log( greeting.endsWith("elio") );   // false

console.log( greeting.includes("He") );     // true
console.log( greeting.includes("elio") );   // true

// .search()
let str = "Please locate where 'locate' occurs!";
let pos = str.search("locate");                 // 7
console.log(pos); 

//...
let str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");


str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");

var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

var str = "HELLO WORLD";
str.charAt(0);            // returns H

var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72

var str = "HELLO WORLD";
str[0];                   // returns H



var str = "Hello World!";
var res = str.toLowerCase();

var str = "Hello World!";
var res = str.toString();

var str = "Hello World!";
var res = str.toUpperCase();

var str = "       Hello World!        ";
alert(str.trim());

var str = "Hello World!";
var res = str.valueOf();


let greeting_trim_length = greeting_trim.length;
console.log(greeting_trim_length);          // 20

console.log(greeting_trim.toUpperCase());   // WELLCOME TO CAROLINA
console.log(greeting_trim.toLowerCase());   // wellcome to carolina



console.log(greeting_trim.replace('Carolina','Spain'));  // Wellcome to Spain

// .split('separator', 'number')
