function sayHello(str){
    //console.log("Hello " + str);
    alert(`Hello ${str}!!`);
}

function getFullName(firstName, lastName){
    alert(`${firstName} ${lastName}`);
}

function getFullNameAgain(){
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    document.write(`${fname} ${lname}`);
}

// console.log('King');
// console.log('Dan');

// getFullName('Danny', 'Pham');
// getFullName('Danny');
// getFullName('Danny', 'Pham' , 'Sam');