const airport = {
  _id: "5c4ff659bd88aee387a98fa4",
  code: "AAN",
  lat: "24.25",
  lon: "55.75",
  name: "Al Ain Airport",
  city: "Ayn al Faydah",
  state: "Abu Dhabi",
  country: "United Arab Emirates",
  woeid: "12523371",
  tz: "Asia/Dubai",
  type: "Airports",
  icao: "OMAL",
  direct_flights: "12",
  carriers: "9",
};

// console.log(airport["name"]);
// console.log(airport.name);
/////////////////////////////////////////////
// console.log(Object.keys(airport));
// console.log(Object.values(airport));
/////////////////////////////////////////////
// console.log("state" in airport);
// console.log("state-2" in airport);
/////////////////////////////////////////////
// for (let key in airport) {
//   console.log(`${key} = ${airport[key]}`);
// }
/////////////////////////////////////////////
// airport.carriers = "10";
// console.log(airport);
/////////////////////////////////////////////
delete airport.carriers;
console.log(airport);
/////////////////////////////////////////////
