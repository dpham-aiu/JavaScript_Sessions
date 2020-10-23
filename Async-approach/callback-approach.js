var fs = require("fs");

fs.readFile("source_one.txt", function (err, data) {
  if (err) console.log(err);
  else {
    fs.readFile("source_two.txt", function (err, data2) {
      if (err) console.log(err);
      else {
        fs.writeFile("dest_one.txt", data + data2, function (err) {
          if (err) console.log(err);
          else console.log("sucessfully transferred data :");
        });
      }
    });
  }
});
