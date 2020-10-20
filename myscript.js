// console.log('Hello from my script file.');
// alert('I am loaded now'); //ok 

if(confirm("Do you want to proceed?") == true){
    document.getElementById('confirmBox').innerHTML ='You are selected for next round..';
}else{
    document.getElementById('confirmBox').innerHTML ='Opps, you are rejected.';
} //ok and cancel


var age = prompt('Please enter your age: ');
var ageValid = document.getElementById('validAge');

if(age >= 18){
    //alert("You are valid to vote.");
    //document.write('You are valid to vote.');
    ageValid.innerHTML = "You are valid to vote";
}else{
    //document.write("You are not old enough to vote.");
    ageValid.innerHTML = "You are not valid to vote";
}