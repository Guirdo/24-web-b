/**
 * Los arreglos son una estructura de datos, parecido 
 * a una lista
 * [
 *  123,
 *  126,
 *  124
 * ]
 */

/* let arreglo2 = [1,2,3]

console.log(arreglo2)

arreglo2 = 'una cadena'

console.log(arreglo2)
 */

const arreglo = [1,'string',3, true, ['una cadena',3], false, {nombre: 'Sebastian', escuela: 'devf'}]

const matriz = [
  [1,2,3],
  [1,2,3],
  [1,2,3],
]

console.log(arreglo)

const compañeros = [
  {nombre: 'Fabricio'}, // posición 0
  {nombre: 'Alan'}, // posicion 1
  {nombre: 'Miguel'}, // posicion 2
  {nombre: 'Maria'}, // posicion 3
  {nombre: 'Israel'} // posicion 4
]

console.log(compañeros[1])
console.log('Total de compañeros: ', compañeros.length)

// Añadir elementos 

// Como funciona el callstack y el event loop
// Tareas de JavaScript
// Microtareas de la WebAPI
// Tareas de WebAPI
console.log('Antes del push: ',compañeros)

let companero = {nombre: 'Salvador'}
compañeros.push(companero)

console.log('Despues del push: ',compañeros)

compañeros.push({nombre: 'Mali'})

compañeros.pop()
console.log('Despues del pop: ',compañeros)

compañeros.unshift({nombre: 'Vico'})
console.log('Unshift',compañeros)

compañeros.shift()
console.log('Shift',compañeros)

console.group('Split de cadenas')
const listaCompras = 'tomate,arroz,frijoles,refresco'
console.log(listaCompras)
console.log(listaCompras.split(','))

console.groupEnd()
                  // 0        // 1        //2     
const verduras = ['Repollo', 'Lechuga', 'Zanahoria', 'Papa']

console.log(verduras)
console.log(verduras.slice(1,3))

console.group('Metodo find')

console.log(verduras.find(elemento => elemento === 'Batata'))

const numeros =  [4,7,3,9,10,3,8]

const numerosMayores8 = numeros.filter(elemento => elemento > 8)

console.log(numerosMayores8)

console.groupEnd()

console.group('Metodo concat')

const arreglo1 = [1,2,3]
const arregloDos = [4,5,6]

const numerosEnOrder = arreglo1.concat(arregloDos)
console.log(numerosEnOrder)

console.groupEnd()

console.group('Metodo reverse')

console.log(numerosEnOrder.reverse())

console.groupEnd()

console.group('Metodo sort')

console.log(verduras.sort())

const otrosNumero = [5,9,10,2,8,67]
console.log(otrosNumero.sort((a, b) => a - b))

// 5 - 9 = -4 // significa menor
// 9 - 10 = -1

// Si en la comparacion sale
// un numero menor a 0 signfica que es menor
// si sale 0 significa es igual
// si sale mayor a 0 significa que es mayor

console.groupEnd()

console.group('Metodo map')

const numerosNormales = [1,2,3,4,5,6,7]

const numerosPorTres = numerosNormales.map((elemento,index) => {
  if(elemento % 2 === 0){
    return elemento * 3
  }else {
    return elemento * 10
  }
})

console.log(numerosPorTres)

console.groupEnd()

console.group('Metodo splice')

const verdurasYFrutas = ['Repollo', 'Lechuga', 'Zanahoria', 'Jitomate', 'Aguacate', 'Mango','Papa']

// De esta forma no elimina nada, solo agrega
console.log(verdurasYFrutas.splice(3,0, 'Naranja', 'Morron','Piña', 'Guayaba'))

console.log(verdurasYFrutas)
// De esta forma elimina al mismo tiempo
console.log(verdurasYFrutas.splice(2, 2))
console.log(verdurasYFrutas)

compañeros.splice(1,2, {nombre: 'Eustolia'}, {nombre: 'Eduardo'},{nombre: 'Adrian'})

console.log(compañeros)

/* const compañeros = [
  {nombre: 'Fabricio'}, // posición 0
  {nombre: 'Alan'}, // posicion 1
  {nombre: 'Miguel'}, // posicion 2
  {nombre: 'Maria'}, // posicion 3
  {nombre: 'Israel'} // posicion 4
] */

console.groupEnd()