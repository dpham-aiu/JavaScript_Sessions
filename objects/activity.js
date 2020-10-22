var number = 100;

function myFunc() {
  var number = 200;
  //this.number = 200 making a property
  console.log(number); //local variable 200
  console.log(this.number); //undefined
}

//myFunc();

var obj = new myFunc();
console.log(obj.number);
