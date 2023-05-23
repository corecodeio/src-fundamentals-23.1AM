let user1 = { name: 'Lucia', age: 30 }
let user2 = user1;

user2.age = 25
/* console.log(user1.age)
console.log(user2.age) */

/* const a = [1, 2]
const b = [3, 4]
console.log(a.concat(b)) */

// console.log(Object.values(user1))

// SETS
let set1 = new Set(['apple', 'banana', 'apple', 'apple', {name: 'Gus'}])
// console.log(set1)
// console.log(set1.size)

// MAPS
let map1 = new Map();
// .set(key, value)  => None
map1.set('a', 'Gus')
map1.set('b', [1,2,3])
// map1.delete('b')

//.get(key) =>   value (type: ANY)

console.log(map1.get('a'));

// MAPS vs OBJECTS
const object1 = {
  a: 'Gus',
  b: [1,2,3]
}

const object2 = {name: 'ABC', age: 123}
map1.set(object2, object2)
object2.name = 'DEF'
console.log(map1)


