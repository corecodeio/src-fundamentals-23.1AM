// MULT TABLE: 7
const LEVEL = 2
const numbers = [2,4,6,8,10,12,14,16,18,20]

function multTwo(value, index) {
  console.log('IDX was: ', index)
  return value * LEVEL
}


// const multTableTwo = numbers.map((item, idx) => multTwo(item, idx)) // Returns new array
const multTableTwo = numbers.map(multTwo) // Returns new array
console.log(numbers)
console.log(multTableTwo)