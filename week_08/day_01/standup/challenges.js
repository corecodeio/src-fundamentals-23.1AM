// Count strings in objects

// Step 1: Function create
// Step 2: Easy scenario
// Step 3: Out the box

// Object
// -- Primitives
// ---- String

// -- Non Primitives
// ----- Custom Objects {}
// ----- Arrays

// NON RECURSIVE
function strCount(obj) {
  let count = 0

  // Primitives
  if (typeof(obj) === 'string') {
    count += 1;
  } else if (typeof obj === 'object' && obj !== null) {
    // Non primitives
    if (Array.isArray(obj)) {
      // obj = [ val1, val2, ... ]
      for (let value of obj) {
        if (typeof(value) === 'string') {
          count += 1;
        }
      }
    } else {
      let objValues = Object.values(obj);
      // objValues = [ val1, val2, ... ]
      // objValues = ["1", "2", false, ["anyTime", 2, 3, 4], null]
      for (let value of objValues) {
        if (typeof(value) === 'string') {
          count += 1;
        } else if (typeof value === 'object' && value !== null) {
          // Non primitives
          if (Array.isArray(value)) {
            // value = [ val1, val2, ... ]
            for (let val of value) {
              if (typeof(val) === 'string') {
                count += 1;
              }
            }
          }
        }
      }
    }
  }

  return count;
}









// Recursive
/* function strCount(obj) {
  let count = 0

  // Primitives
  if (typeof(obj) === 'string') {
    count += 1;
  } else if (typeof obj === 'object' && obj !== null) {
    // Non primitives
    if (Array.isArray(obj)) {
      // obj = [ val1, val2, ... ]
      for (let value of obj) {
        count += strCount(value)
      }
    } else {
      let objValues = Object.values(obj);
      // objValues = [ val1, val2, ... ]
      // objValues = ["1", "2", false, ["anyTime", 2, 3, 4]]
      for (let value of objValues) {
        count += strCount(value)
      }
    }
  }

  return count;
} */

const myObj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", "Yishar", 'Darling', 3, 4],
  fifth: null,
}

console.log(strCount(myObj))
