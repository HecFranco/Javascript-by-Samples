let arr = [1,'2',3,4,'true',5,6]; 
console.log(arr);

console.log(arr[4]);

let sum =0;

for (let index = 0; index < arr.length; index++ ){
  let element = arr[index];
  if (typeof element == 'number'){
    sum += element;
  }
}

console.log(sum);   // 19

for (let index = 0; index < arr.length; index++ ){
  let element = arr[index];
  if (typeof element != 'number') continue;
    sum += element;
}

console.log(sum);   // 19


let teachers = ['Alex', 'kiko', 'Luis', 'Arnaldo'];
for ( let i = 0 ; i < teachers.length ; i++ ) {
  if( teachers[i].toUpperCase().indexOf('A') == 0 ) {
    console.log( 'Start for a' );
  }
}

let i = 100;
while (i > 0) {
  console.log('number '+i);
  i--;
}

let password = 'start';
let pass;
do{
  pass = prompt ('Give me your password: ');
} while (pass != password);

for ( let value of teachers ) {
  console.log(value);
}