//unnamed functions 
/**
 * Helps in callback, arrow function, or passing the function inside another function.
 */
var fullName = function(){
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    document.write(`Hello ${fname} ${lname}!! ${getStatus(age)}`);
}

function getStatus(age){
    if(age >= 18){
        return document.write("You are valid to travel.");
    }else{
        return document.write("You are not valid to travel...");
    }
}