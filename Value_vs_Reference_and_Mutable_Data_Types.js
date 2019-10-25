// as per https://stackoverflow.com/a/5859028/1175555
// CompareObjects compares to objects passed as arguments
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

/// //////////////////////////////////////////

// // array copy with Array.slice
// const students = ["Ana", "John", "Fabio"];
// const ironhackers = students.slice();

// students.push("sandra");
// console.log(students);
// console.log(ironhackers);

/// //////////////////////////////////////////

// object deep copy

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

/// //////////////////////////////////////////

// Object copy with Object.assign

// const book1 = {
//   author: 'Charlotte Bronte'
// }

// const book2 = Object.assign({}, book1)

// console.log(book2) // <== { author: "Charlotte Bronte" }

// // As we can see the objects are the same but they don’t referece the same object so changes in one wouldn’t cause changes in the other one
// console.log(book1 === book2) // <== false

/// //////////////////////////////////////////

// array copy with spread operator
// const students = ["Ana", "John", "Fabio"];
// const ironhackers = [...students];

// students.push("sandra");
// console.log(students);
// console.log(ironhackers);

/// //////////////////////////////////////////

// Object copy and extension with spread operator

// const book = {
//   author: 'Charlotte Bronte'
// }
// const theSameBook = { ...book, pages: 400 }

// console.log(book) // <== { author: 'Charlotte Bronte' }
// console.log(theSameBook) // <== { author: 'Charlotte Bronte', pages: 400 }

/// //////////////////////////////////////////

// Extracting parts of objects using destructuring

const book = {
  author: 'Charlotte Bronte',
  pages: 400,
  publishers: [
    {
      name: 'publisher1'
    },
    {
      name: 'publisher2'
    }
  ]
}

const { author, ...theRest } = book

console.log('author:', author) // <== Charlotte Bronte
console.log('remaining object:', theRest) // <== { pages: 400, publishers: [ { name: 'publisher1' }, { name: 'publisher2' } ] }
