// ------- Exceptions: throw, try, catch -------
// function sayHello(name) {
//   if (!name) {
//     throw new Error('nombre invalido')
//   }
//   if (typeof name !== 'string') {
//     throw new Error('el valor no es un string')
//   }
//   console.log('Hello, '+ name + '!')
// }

// try {
//   sayHello(2390923)
// } catch(e) {
//   // console.log(e)
//   // console.log(e.message)
//   // console.log(e.name)
//   const message = `Error al saludar. Mensaje: ${e.message}`
//   console.log(message)
// }

// const e = new Error('problemas!!')
// console.log(e)

// ----- herencia -----
// class Animal {
//   constructor(name, numberOfEyes) {
//     this.name = name;
//     this.numberOfEyes = numberOfEyes;
//   }
// }

// class Spider extends Animal {
//   constructor(spiderwebType) {
//     super('spider', 8);
//     this.spiderwebType = spiderwebType;
//   }
// }

// const s = new Spider('Tela irregular')

// ------ custom errors ---------
// class InvalidNameValue extends Error {}
// class InvalidNameType extends Error {}

// function sayHello(name) {
//   if (!name) {
//     throw new InvalidNameValue('nombre invalido')
//   }
//   if (typeof name !== 'string') {
//     throw new InvalidNameType('el valor no es un string')
//   }
//   console.log('Hello, '+ name + '!')
// }

// try {
//   sayHello(234234)
// } catch(e) {
//   if (e instanceof InvalidNameValue) {
//     console.log('El nombre enviado es invalido o no se ha enviado.')
//   }
//   if (e instanceof InvalidNameType) {
//     console.log('El tipo de "nombre" no es valido, solo se permiten string.')
//   }
// }

// ------- web errors (example) ----------
// class DocumentDoesNotExist extends Error {}
// class InvalidDocumentPermission extends Error {}

// try {
//   throw InvalidDocumentPermission();
// } catch(e) {
//   if (e instanceof DocumentDoesNotExist) {
//     // devolver status 404
//   }
//   if (e instanceof InvalidDocumentPermission) {
//     // devolver status 403
//   }
// }
