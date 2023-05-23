// FOR

// i++  ->  i = i + 1
// i--  ->  i = i - 1
// + 2  ->  i = i + 2   ->   i += 2
/* for (let i = 0; i <= 10; i += 2) {
  console.log('Value: ', i);
} */
/* for (let i = 0; i <= 10; i += 2) {
  console.log('Value: ', i);
} */


// WHILE
/* let flag = 0;
while (flag <= 10) {
  // flag = flag + 2
  console.log('Value: ', flag); // flag = 10
  flag += 2;
} */


// DO...WHILE
/* hasPMEnrollment = false
do {
  console.log('Yishar has PM enrollment');
} while (hasPMEnrollment); */

/* let flag = 0;
do {
  console.log('Value: ', flag); // 10
  flag += 2; // 12
} while (flag <= 10); */



//FOR ... IN (for Objects)
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

// FOR IN for arrays = 0, 1, 2, ... (indices)
/* const myArray = ['a', 'b', 'c']
for (let index in myArray) {
  console.log(myArray[index])
} */

// FOR IN for objects = prop/methods names
/* for (let myProp in car) {
  console.log(myProp + ': ' + car[myProp]); // model : Lancer
} */


// FOR... OF
// FOR OF for arrays = values
/* const myArray = ['a', 'b', 'c']
for (let value of myArray) {
  console.log(value)
} */



// BREAK
/* for (let i = 0; i <= 5; i++) {
  console.log('Value: ', i);
  if (i === 2) {
    break;
  }
} */

// CONTINUE
/* for (let i = 0; i <= 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log('Value: ', i);
} */

// NESTED LOOPS
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 5; j++) {
    console.log('Value: ', i, j);
  }
}

/* i j
0 0
0 1
0 2
0 3
0 4
0 5
1 0
1 1
1 2 
... */
