class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting.`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} is stopping.`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model);
    this.doors = doors;
  }

  honk() {
    console.log(`${this.brand} ${this.model} is honking.`);
  }
}

class Bike extends Vehicle {
  constructor(brand, model, type) {
    super(brand, model);
    this.type = type;
  }

  pedal() {
    console.log(`${this.brand} ${this.model} is pedaling.`);
  }
}

const car1 = new Car("Toyota", "Corolla", 4);
const bike1 = new Bike("Giant", "Escape 3", "Road");
const car2 = new Car("Honda", "Civic", 4);

car1.start();
car1.honk();
car1.stop();

bike1.start();
bike1.pedal();
bike1.stop();

car2.start(); 
car2.honk(); 
car2.stop(); 
