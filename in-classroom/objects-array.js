let planet1 = {
  name: "earth",
  radius: 40000,
  getReport: function() {
    console.log("Planet name: ", this.name, "Radius:", this.radius);
  }
};

let planet2 = {
  name: "mars",
  radius: 18000,
  getReport: function() {
    console.log("Planet name: ", this.name, "Radius:", this.radius);
  }
};

let planet3 = {
  name: "venus",
  radius: 38000,
  getReport: function() {
    console.log("Planet name: ", this.name, "Radius:", this.radius);
  }
};

// function getReport() {
// //   console.log("Planet name: ", this.name, "Radius:", this.radius);
//     console.log(this)
// }

// getReport()
// getReport.apply(planet3);



let planets = [planet1, planet2, planet3];

// planets.forEach(planet => planet.getReport())
planets.forEach(function (planet) {
    planet.getReport()
} )

// console.log(planets);

// let totalRadiusInSolarSystem = planets.reduce(function(ac, planet) {
//   return planet.radius + ac;
// }, 0);

// console.log(totalRadiusInSolarSystem);
// console.log("avg=", totalRadiusInSolarSystem / planets.length);

// planets.forEach(function(planet) {
//   console.log(planet.name);
// });
