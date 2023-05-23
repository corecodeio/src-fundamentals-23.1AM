const PREFIX = 'MIA'

class SimpleCar {
  constructor(make) {
    this.make = make
  }
}

class Car extends SimpleCar {
  static NUM_TIRES = 4

  constructor(make, model, year) {
    super(make)
    this.model = model
    this.year = year
    this._plate = ''
  }

  get plate() {
    return PREFIX + this._plate
  }

  set plate(value) {
    this._plate = value.toUpperCase() // MAYUS
  }

  getInfo() {
    console.log('INFO: ', this.make, this.model, this.year)
  }
}




const gusCar = new Car('Toyota', 'Hilux', '2000');
const luciaCar = new Car('Mitsubishi', 'Lancer', '2023');
const ignacioCar = new Car();
const yisharCar = new SimpleCar('Jeep');

ignacioCar.plate = '123abc'
gusCar.getInfo()
luciaCar.getInfo()
ignacioCar.getInfo()

console.log(gusCar instanceof Car)
console.log(gusCar instanceof SimpleCar)