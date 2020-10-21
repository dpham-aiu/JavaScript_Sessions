// function openExplain(){
//     var element = document.getElementById('content');
//     element.style.display = 'block';
// }

// function closeExplain(){
//     var element = document.getElementById('content');
//     element.style.display = 'none';
// }

// function doOver(element){
//     document.getElementById('image').innerHTML = element.alt;
// }

// function doOut(){
//     document.getElementById('image').innerHTML = "Hover over an image to show the alt."
// }

openExplain = () =>{
    var element = document.getElementById('content');
    element.style.display = 'block';
}

closeExplain = () =>{
    var element = document.getElementById('content');
    element.style.display = 'none';
}

doOver = (element) => document.getElementById('image').innerHTML = element.alt;

doOut = () => document.getElementById('image').innerHTML = "Hover over an image to show the alt."