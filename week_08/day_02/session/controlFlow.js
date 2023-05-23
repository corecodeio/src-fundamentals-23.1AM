// CONDITIONALS

/* const a = 'course';

// 
if (a === 'course') {
  console.log('Hello');
} else if (a === 'class') {
  console.log('Hello');
} else {
  console.log('World');
}


switch(a) {
  case 'course':
    // do something
    console.log('Hello');
    break;
  case 'class':
    console.log('Hello');
    break;
  default:
    console.log('World');
}

// Semaphore
const status = 0
switch(status) {
  case 0:
    // do something
    console.log('Stop');
    break;
  case 1:
    console.log('GO AHEAD');
    break;
  default:
    console.log('Warning');
} */


// TERNARY OPERATOR

// Without ternary
// let isAdult;
/* let isAdult;
let studentAge = 13;

if (studentAge >= 18) {
  isAdult = true;
} else {
  isAdult = false;
} */

// With ternary operator
/* let studentAge = 19
let isAdult = studentAge >= 18 ? true : false;
console.log(isAdult) */


// COMMA OPERATOR
/* let a = 0
let b = 1
... */
let a, b, c;

// UNARY OPERATOR
// i++  ->  i = i + 1
// i--  ->  i = i - 1

a = 10
b = 11
c = ++a;

// a = 11
// b = 11
// c = 11

console.log(a, b, c);
// with booleans
const isAdult = true;
console.log('isChild: ', !isAdult)
