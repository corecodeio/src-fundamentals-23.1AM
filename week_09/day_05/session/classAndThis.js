// AGENDA
// 1. `this` aplicado a metodos y funciones
// 2. manejo de excepciones (errores)

// class Person {
//   constructor(firstName, lastName, age) {
//     if (firstName && lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     } else {
//       console.log('problema al asignar nombre y apellido')
//     }
    
//     this.age = age;
//   }
  
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const p = new Person('Pedro', 'Picapiedra', 38);
// console.log({
//   firstName: p.firstName,
//   lastName: p.lastName,
//   age: p.age,
//   fullName: p.fullName
// })

// p.firstName = 'Juan';

// console.log({
//   firstName: p.firstName,
//   lastName: p.lastName,
//   age: p.age,
//   fullName: p.fullName
// })


// function sayHello() {
//   if (!this.value) {
//     this.value = 0;
//   }
  
//   this.value += 1;
//   console.log(this.value, 'hello')
// }

// sayHello()
// sayHello()
// sayHello()
// sayHello()

// const person = {
//   age: undefined,
//   setAge: function(a) {
//     this.age = a;
//   }
// }

// person.setAge(18)
// console.log(person.age)
