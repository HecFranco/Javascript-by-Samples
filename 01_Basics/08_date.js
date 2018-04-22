// DATE
/*****************************************************************/

/*
 * DATES IN JAVASCRIPT
 * To handle date, the Date object is used, 
 * which must be instantiated whenever it is required to use it.
 */

(function(){
  "use strict";
  var date = new Date();
  var day = date.getDay();
  // console.log(fecha);

  if(day === 1){
    day = "Monday";
  }

  console.log(day);

  // To specify dates you can
  // pass parameters in the following order
  // year / month (0 index) / day / hour / minute / second
  var myBirth = new Date (1980,1,4);
  console.log(myBirth);

  // Methods to work with dates
    // .getFullYear()   --> year
    // .getDay()  --> weekday (0, Sunday a 6, Saturday)
    // .getDate()
    // .getMonth()

    console.log(myBirth.getFullYear());
    console.log(myBirth.getMonth());
    console.log(myBirth.getDate());
    console.log(myBirth.getDay());
})();