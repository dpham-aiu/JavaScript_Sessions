var list = document.getElementsByTagName("li");
for (i = 0; i < list.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.appendChild(text);
  span.className = "close";
  list[i].appendChild(span);
}

var closeList = document.getElementsByClassName("close");
for (i = 0; i < closeList.length; i++) {
  closeList[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

newTodo = () => {
  var input = document.getElementById("myInput").value;
  var text = document.createTextNode(input);
  var li = document.createElement("li");
  li.appendChild(text);
  if (input === "") {
    alert("You must write something.");
  } else {
    var myList = document.getElementById("myList");
    myList.appendChild(li);
    document.getElementById("myInput").value = "";
  }
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.appendChild(text);
  span.className = "close";
  li.appendChild(span);
  for (i = 0; i < closeList.length; i++) {
    closeList[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
};

removeAll = () => {
  var list = document.getElementById("myList");
  list.innerHTML = "";
};
