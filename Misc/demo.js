/**
 * JS Hoisting:
 * In JS, variables and mfucntions can be used before devlaring it.
 */

// number = 100;
// console.log("Number : " + number);
// var number;

/**Hoisting only works with declaration but not the initialization */
console.log(number);
var number = 100;

myFunct();
//Declaring
function myFunct() {
  console.log("This is myFunc");
}

//does not work since var is not a function, error.
//js compiler does not move function expression to the top. So it stays as a variable.
// myF();
// var myF = function mySunc() {
//   console.log("My sunc");
// };
