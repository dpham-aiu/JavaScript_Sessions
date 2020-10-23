var fs = require("fs");

var data_one = fs.readFile("demo_one.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

var data_two = fs.readFile("demo_two.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
