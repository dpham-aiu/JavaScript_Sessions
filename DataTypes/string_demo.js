var first_name = 'king';
var last_name = 'kochar';

console.log(first_name + last_name);
var description = "Hello Everyone, we are talking about 'JavaScript'";
var description2 = 'Hello Everyone, we are talking about "JavaScript"';
console.log(description);
console.log(description2);
var description3 = 'Hello Everyone, we are talking about \'JavaScript\'';
var description4 = "Hello Everyone, we are talking about \"JavaScript\"";
console.log(description3);
console.log(description4);

var str1 = new String('Hello World');
var str2 = new String('Hello World');
var str3 = 'Hello World';
var str4 = str1;

console.log(str1 == str2);
console.log(str1 == str3);
console.log(str1 === str4);

console.log(typeof(str1));
console.log(typeof(str3));