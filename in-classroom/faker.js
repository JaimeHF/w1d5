var faker = require("faker");

Array(50)
  .fill()
  .forEach(x => {
    console.log(faker.internet.email())
  });
