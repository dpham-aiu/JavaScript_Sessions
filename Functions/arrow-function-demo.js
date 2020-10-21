/**
 * Arrow function is the concept of ES6.
 * An alternatice way to write a shorter syntax compared to the functions or function expressions.
 */

//  function addition (a, b){
//      return (a + b);
//  }

//  console.log(addition(100, 200));

//expression function
// add = function addition(a,b){
//     return a + b;
// }

// console.log(add(100, 200));

//annonymous function
// add = function (a, b){
//     return a + b;
// }

var sayHello = () => console.log('Hello Everyone.');

sayHello();

var sayHelloWithMessage = () => {
    console.log("Hello Everyone");
    console.log("Today's cold.");
    console.log("Let's learn interesting facts about JS");
}

sayHelloWithMessage();

var add = (num1, num2) => {
    return num1 + num2;
}

add(1, 2);

console.log('----------------------------------------');

let numbers = [4, 2, 6];
console.log(numbers.sort((a, b) => b-a));