var fs = require("fs");
var promise = new Promise((resolve, reject) => {
  fs.readFile("demo_one.txt", (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

var promise2 = new Promise((resolve, reject) => {
  fs.readFile("demo_two.txt", (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

// promise
//   .then((data) => console.log(data.toString()))
//   .catch((error) => console.log(error));

promise
  .then((data) => {
    console.log(data.toString());
    promise2.then((data) => {
      console.log(data.toString());
    });
  })
  .catch((err) => console.log(err));
