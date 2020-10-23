/**
 * Promise: helps in writing async code.
 * It also help us to avoid a callback hell.
 * First, we create a promise adn then we handle them.
 * Promise in js can be either resolved or rejected.
 */

const { resolve } = require("path");

var promise = new Promise(function (resolve, reject) {
  var isTrue = true;
  if (isTrue) {
    resolve("Your status is active.");
  } else {
    reject("Your status is inactive.");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// promise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
