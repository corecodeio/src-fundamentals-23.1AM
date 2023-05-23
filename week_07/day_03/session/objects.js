/* ACCESS */
let angie = {
  firstName: 'Angie',
  lastName: 'McCarthy',
  age: 20,
}

const ageKey = 'age'

// 1 App. dot notation
// console.log(angie.firstName);
// 2 App bracket notation
// console.log(angie['lastName']);
// console.log(angie[ageKey]);
// console.log(angie)


/* CHANGES */
angie.lastName = 'Lopez'
// Add prop
angie.gender = 'female'
angie.hasPMEnrollment = false
// Delete prop
delete angie.hasPMEnrollment
// console.log(angie)

/* ARRAY OF OBJECTS */
const bootcampAM = [
  angie,
  { firstName: 'Carlos', lastName: 'Rafaelano' },
  { firstName: 'Darling', lastName: 'Garcia' },
  { firstName: 'Jenuel', lastName: 'Marbal' },
]

console.log(Object.keys(angie)) 

/* FUNCTIONS AS METHODS */
const car = {
  // Props
  make: 'Mitsubishi',
  model: 'Lancer',
  color: 'black',
  miles: 70000,
  // Methods
  printMiles: function () {
    console.log(this.miles)
  },
  incrementMiles: function (newMiles) {
    this.miles += newMiles
    // this.miles = this.miles + newMiles;
  }
}

car.printMiles()
car.incrementMiles(2000)
car.printMiles()
