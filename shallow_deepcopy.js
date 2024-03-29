// Deep copy means all the values of new variable are copied and disconnected from the original variable. 
// A shallow copy means that certain sub values are still connected to the original variable.

const a = {
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
  pt: 'Olà'
}
let b = a
b.pt = 'Oi'
console.log(b.pt) // Oi
console.log(a.pt) // Oi

const a = {
  en: 'Bye',
  de: 'Tschüss'
}
let b = {...a} // Spread Operator and let b = Object.assign({}, a)
b.de = 'Ciao'
console.log(b.de) // Ciao
console.log(a.de) // Tschüss