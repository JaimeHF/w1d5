// as per https://stackoverflow.com/a/5859028/1175555
// let Utils = {};
// Utils.compareObjects = function(o1, o2) {
//   for (var p in o1) {
//     if (o1.hasOwnProperty(p)) {
//       if (o1[p] !== o2[p]) {
//         return false;
//       }
//     }
//   }
//   for (var p in o2) {
//     if (o2.hasOwnProperty(p)) {
//       if (o1[p] !== o2[p]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// let a = { b: 5, a: 1 };
// let b = { a: 1, b: 5 };

// console.log(Utils.compareObjects(a, b));

/////////////////////////////////////////////

// // array copy 1
// const students = ["Ana", "John", "Fabio"];
// const ironhackers = students.slice();

// students.push("sandra");
// console.log(students);
// console.log(ironhackers);

/////////////////////////////////////////////

// array copy 1
// const students = ["Ana", "John", "Fabio"];
// const ironhackers = [...students];

// students.push("sandra");
// console.log(students);
// console.log(ironhackers);

/////////////////////////////////////////////

// object copy
// const airport = {
//   _id: "5c4ff659bd88aee387a98fa4",
//   code: "AAN",
//   lat: "24.25",
//   lon: "55.75",
//   name: "Al Ain Airport",
//   city: "Ayn al Faydah",
//   state: "Abu Dhabi",
//   country: "United Arab Emirates",
//   woeid: "12523371",
//   tz: "Asia/Dubai",
//   type: "Airports",
//   icao: "OMAL",
//   direct_flights: "12",
//   carriers: "9",
// };

// let airportCopy = JSON.parse(JSON.stringify(airport));
// console.log(airportCopy);
