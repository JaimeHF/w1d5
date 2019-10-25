class Planet {
  constructor(name, radius) {
    if (radius < 0) {
      throw new RangeError("Planet radius cannot be negative");
    }

    // this = {}


    this.name = `Planet name is ${name.toUpperCase()}`;
    this.radius = radius;

    return {name: xxx,
        radius: 343443}
  }

  getReport() {
    console.log("Planet name: ", this.name, "Radius:", this.radius);
  }
}

let planet1;
try {
  //   planet1 = new Planet("Earth", -40000);
  planet1 = new Planet("Earth", 40000);
} catch (myError) {
  console.log("there was an error");
  console.log(myError);
}
let planet2 = new Planet("Mars", 18000);
let planet3 = new Planet("Venus", 38000);

let planets = [planet1, planet2, planet3];

console.log(planets);
