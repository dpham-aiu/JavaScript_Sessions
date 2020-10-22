// var employee = {
//     name: 'King Kochar',
//     age:23,
//     city:'Delhi'
// }

// var emp2 = {
//     name='Happy Tap',
//     age:14,
//     city:'Oakland'
// }

//empty object literal
var person = {};
//object literal with properties
// var person ={
//     firstName: 'King',
//     lastName: 'Smith'
// }
// console.log(person)
//object literal with properties
// var person ={
//     firstName: 'King',
//     lastName: 'Smith',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(person);

console.log('-------------------------------------------------------------');

var person ={
    firstName:'King',
    lastName: 'Kochhar',
    getFullName: function (){
        return `${this.firstName} ${this.lastName}`
    }
}

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
console.log(person.getFullName());