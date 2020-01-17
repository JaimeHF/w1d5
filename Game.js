class GameCharacter {
  constructor(x, y) {
    this.life = 100;
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  attack() {
    // this would animate the character with its axe
    console.log("i am attacking an enemy")
  }

  receiveHit(hitStrength) {
    this.life -= hitStrength;

    if (this.life < 0) {
      this.die();
    }
  }

  die() {
    console.log("death");
  }
}

class Warrior extends GameCharacter {
  constructor(x, y) {
    super(x, y);

    this.life = 200;
  }
}

class Wizard extends GameCharacter {
  constructor(x, y) {
    super(x, y);

    this.life = 50;
  }

  increaseLevel() {}

  castSpell() {
    console.log("I am casting a spell");
  }
}

// create an army of 100 soldiers!
// Array(100)
//   .fill()
//   .map(
//     () =>
//       new GameCharacter(
//         Math.round(Math.random() * 800),
//         Math.round(Math.random() * 600)
//       )
//   );


let warrior1 = new Warrior(100, 300)
let wizard1 = new Wizard(400, 400)