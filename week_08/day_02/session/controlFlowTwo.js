// ARROW FUNCTIONS

/* function multiplyTwo(value) {
  return value * 2
} */
const multiply = (value1, value2) => value1 * value2;
const multiplyTwo = value => value * 2;

const result = multiply(4, 3);
// console.log(result);


// ARRAY METHODS
const fruits = ['banana', 'apple', 'cherry'];
/* for (let fruit of fruits) {
  console.log(fruit)
} */
fruits.forEach(value => console.log(value));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
/* const results = []
for (let i = 0; i < 10; i += 1) {
  results.push(numbers[i] * 5);
} */
const results = numbers.map(item => item * 5);
// console.log(results);


const valuesToSum = [2, 6, 10]
/* let sumResult = 0;
for (let i = 0; i < valuesToSum.length; i += 1) {
  sumResult += valuesToSum[i];
} */
const sumResult = valuesToSum.reduce((accumulator, current) => accumulator + current);
console.log(sumResult);

const filteredValues = valuesToSum.filter(value => value > 4);
console.log(filteredValues);



