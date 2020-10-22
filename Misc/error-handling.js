/**
 * JS provides error-handling using try-catch-finally blocks
 */
try {
  addition(100, 2);
} catch (ex) {
  console.log("There was some error.");
  console.log(ex);
} finally {
  console.log("Finally block.");
}

function addition(num1, num2) {
  console.log("Result " + (num1 + num2));
}

var age = 8;

try {
  if (age >= 18) {
    console.log("You are valid to vote!!");
  } else {
    throw {
      code: 1001,
      message: "You are not valid to vote",
    };
  }
} catch (ex) {
  console.log("There is some error.");
  console.log(ex.code + " : " + ex.message);
} finally {
  console.log("Final block");
}
