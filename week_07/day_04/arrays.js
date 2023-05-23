const numbers = [1,2,3,4,5,6,7,8,9,10]
/* numbers.push(100)
console.log(numbers);
numbers.pop()
console.log(numbers); */
/* const finalCut = numbers.slice(1, 6)   // 0 - (length(numbers) - 1)
console.log(finalCut); */

// MULT TABLE: 7
const LEVEL = 7
/* function mult(elem) {
  return elem * 7
} */
const multTableSeven = numbers.map(item => item * 7) // Returns new array
// console.log(numbers)
// console.log(multTableSeven)


const data = [1,3,6,7,10,14,20]
const data2 = new Array(1,3,6,7,10,14,20);
// const filterData = data.filter(value => value < 5)
console.log(typeof(data2), typeof(data))
