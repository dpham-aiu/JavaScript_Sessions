function getFullName(fname, lname){
    console.log(`${fname} ${lname}`);
}

getFullName('King');

function add(...numbers){
    var total = 0;
    for( var a of numbers){
        total = total + a;
    }
    console.log(total);
}

add(10,20,30,40,50);

var odd = [1, 3, 5, 7];
var even = [2, 4, 6, 8];
var combined = [...odd, ...even];
console.log(combined);

