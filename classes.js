class Fruit {
  constructor(name, color) {
    (this.name = name), (this.color = color);
  }
  sayFruitName() {
    console.log(`The fruit name is ${this.name}`);
  }
}

class Orange extends Fruit {
  constructor(name, shape) {
    super(name), (this.shape = shape);
  }
  sayNutrient() {
    document.writeln(`This ${this.name} contains vit c`);
  }
}

// const banana = new Fruit("Banana", "yellow");
// banana.sayFruitName();

const orange = new Orange("orange");
orange.sayNutrient();
orange.sayFruitName();

