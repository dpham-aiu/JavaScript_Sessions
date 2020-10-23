var fs = require("fs");

//overwrites the file.
// fs.writeFile("sample_one.txt", "Hello Everyone!!!!!", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Data is wrtitten to file successfully.");
//   }
// });

//adds data to an existing file.
fs.appendFile("sample_one.txt", "Hello Everyone!!!!!", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Data is wrtitten to file successfully.");
  }
});
