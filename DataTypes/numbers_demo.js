var num1 = 100;
console.log(num1);
console.log(typeof(num1));

//declare as object
var number1 = new Number(1000);
var number2 = new Number(1000);
var number3 = number1;
console.log(number1 == number2);
console.log(number1 == number3);
//same type and value.
console.log(number1 === number3);