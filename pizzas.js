class Pizza {
  constructor(nameParam, priceParam, ingredientsArrayParam, countryParam) {
    // this.name = `${nameParam} telepizza and the name length is ${nameParam.length}`;
    this.name = `${nameParam}`;
    this.price = priceParam;
    this.sold = false;
    switch (countryParam) {
      case "ARG":
        this.priceWithTaxes = priceParam * 1.19;
        break;
      case "ESP":
        this.priceWithTaxes = priceParam * 1.21;
        break;
    }
    this.ingredients = ingredientsArrayParam;
  }

  setAsSold() {
      this.sold = true
  }
}

class NYPizza extends Pizza {
    constructor(countryParam) {
        super("NY style", 10, ["mozzarella, tomato, ham"], countryParam)
    }
}


class HawaianPizza extends Pizza {
    constructor(countryParam) {
        super("Hawaian style", 12, ["mozzarella, tomato, ham", "pinneaple"], countryParam)
    }
}

let stock = [
  new HawaianPizza("ESP"),
  new HawaianPizza("ESP"),
  new HawaianPizza("ESP"),
  new HawaianPizza("ESP"),
  new NYPizza("ARG"),
  new NYPizza("ARG"),
  new NYPizza("ARG"),
  new NYPizza("ARG"),
  new NYPizza("ARG"),
  new NYPizza("ARG")
];


stock