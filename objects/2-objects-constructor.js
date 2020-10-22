//class in js

// function Person(){
//     this.firstName = "King";
//     this.lastName = "Kochar";
//     this.getFullName = () => {return `${this.firstName} ${this.lastName}`}
// }

// //create object constructor
// console.log("Person 1: ");
// var person = new Person();
// console.log(person.lastName);
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person.getFullName());

// console.log("Person 2: ");
// var person2 = new Person();
// console.log(person2.lastName);
// console.log(person2.firstName);
// console.log(person2["firstName"]);
// console.log(person2.getFullName());

// function Person(fname, lname) {
//   this.firstName = fname;
//   this.lastName = lname;
//   this.getFullName = () => {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// var person = new Person("Sing", "Ling");
// console.log(person.getFullName());

// var person2 = new Person("Fing", "Crewal");
// console.log(person2.getFullName());

function Person(fName, lName) {
  this.firstName = fName || "Unknown";
  this.lastName = lName || "Unknown";
  Object.defineProperties(this, {
    FirstName: {
      get: function () {
        return this.firstName;
      },
      set: function (value) {
        return (this.firstName = value);
      },
    },
  });
  Object.defineProperties(this, {
    LastName: {
      get: function () {
        return this.lastName;
      },
      set: function (value) {
        return (this.lastName = value);
      },
    },
  });
}

var p1 = new Person();
p1.FirstName = "tom";
p1.LastName = "berry";
console.log(p1);
