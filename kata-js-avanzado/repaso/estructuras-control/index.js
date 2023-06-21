console.group('IF/ELSE condicional')

const numero1 = 23
const numero2 = 45

if ( numero1 > numero2 ) {
  console.log('La condición es verdadera, por lo tanto hago esto')
} else {
  console.log('La condición es falsa, por lo tanto hago esto otro')
}

// App con roles (Admin, sensei, alumno)

const tipoPrivilegios = 'ALUMNO'
let mesPagado = false

/* if (tipoPrivilegios === 'ADMIN'){
  console.log('Es un ADMIN, así que puede crear un curso')
} else {
  if (tipoPrivilegios === 'SENSEI') {
    console.log('Es un SENSEI, así que puede dar clases')
  } else {
    console.log('Es un ALUMNO, así que puede dar subir sus tareas')
  }
} */

if (tipoPrivilegios === 'ADMIN'){
  console.log('Es un ADMIN, así que puede crear un curso')
} else if (tipoPrivilegios === 'SENSEI') {
  console.log('Es un SENSEI, así que puede dar clases')
} else if (tipoPrivilegios === 'ALUMNO' && mesPagado){
  console.log('Es un ALUMNO, así que puede subir sus tareas')
} else {
  console.log('Error: Usuario no valido')
}

console.groupEnd()

console.group('switch')

// Caseta de peaje
// Tipo de pago Efectivo, TarjetaCredito, TarjetaRecargable

const tipoPago = 'EFECTIVO'
let pago = 0

switch (tipoPago) {
  case 'EFECTIVO':
    console.log('Usuario paga con efectivo')

    if( pago > 0 ){
      console.log('Dejalo pasar')
    } else {
      console.log('No dejarlo pasar')
    }

    break;
  case 'TARJETACREDITO':
    console.log('Usuario paga con tarjeta de credito')
    break;
  case 'TARJETARECARGABLE':
    console.log('Usuario paga con tarjeta recargable')
    break;
  default:
    console.log('Forma de pago no es valida')
}

console.groupEnd()

console.group('Ciclos for')

for (let index = 0; index < 10; index++) {
  console.log('Hola mundo!')
}

for (let contador = 15; contador >= 0; contador--) {
  console.log('Contador: ', contador)
}
console.log('Incremento por 2')
for (let contador = 0; contador < 20; contador+= 2) {
  console.log('Contador: ', contador)
}

console.groupEnd()

console.group('Ciclos while')

let contador = 10

while(contador < 10) { // mientras se cumpla esta condición haz algo
  console.log('Contador: ',contador)
  contador++
}

console.groupEnd()

console.group('Ciclos do while')
let contador2 = 10

do{
  console.log('Contador2: ',contador2)
  contador2++
}while(contador2 < 10) // lo va a hacer hasta que se cumpla la condición

console.groupEnd()

/* let entrada = prompt('Ingresa algo: ')

while(entrada !== '') {
  entrada = prompt('Ingresa algo: ')
} */

/* let entrada2

for(let contador = 0; contador < 5; contador++) {
  entrada2 = prompt(`Ingresa el valor #${contador} : `)
}
 */
// Ejercio

/**
 * Alumno que tiene 7 materias, van capturarlas, y van sacar el promedio de esas calificaciones
 * 
 * inicializar una variable acumuladora en 0
 * 
 * por cada ciclo
 * - obtener la califación (prompt) 
 * - acumulando las calificaciones en una variable
 * - acumulador = acumulador + calificación
 * fin del ciclo
 * 
 * promedio = acumulador / totalDeCalificaciones
 * 
 */

console.group('Ejercicio for')

let acumulador = 0
const totalCalificiones = Number(prompt('Ingresa el total de calificaciones: '))

for(let contador = 0; contador < totalCalificiones; contador++) {
  let calificacion = Number(prompt(`Ingresa la calificacion #${contador+1}: `))
  // acumulador = acumulador + calificacion
  acumulador += calificacion
}

let promedio = acumulador / totalCalificiones
//contador < totalCalificiones

console.log('Tu promedio es de: ', promedio)

console.groupEnd()
