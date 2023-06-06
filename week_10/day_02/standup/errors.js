// -------- errors --------
class InvalidValue extends Error {}
class NotExists extends Error {}
const e = new InvalidValue('hubo un problema con el valor')

try {
  throw e;
} catch(e) {
 if (e instanceof NotExists) {
    console.log('el recurso no existe')
  }
  if (e instanceof InvalidValue) {
    console.log('el valor es invalido!')
  } 
}
