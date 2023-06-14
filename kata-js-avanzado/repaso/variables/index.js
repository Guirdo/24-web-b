/** Tipos de datos */

console.group('Tipos de datos')

console.log('Number', 123)
console.log('String', "Una cadena", `Otra cadena`)
console.log('Boolean', true, false)
console.log(NaN, null, undefined)
console.log(Object, Array)

console.groupEnd()

/** Operadores */

console.group('Operadores aritmeticos') // Binarios

console.log('2 + 2 = ', 2 + 2)
console.log('2 - 2 = ', 2 - 2)
console.log('2 * 2 = ', 2 * 2)
console.log('2 / 2 = ', 2 / 2)
console.log('2 % 2 = ', 2 % 2)

console.groupEnd()

console.group('Operadores logicos')

console.log('AND &&',true && true)
console.log('OR ||', true || false)
console.log('NOT !', !false)

console.groupEnd()

console.group('Operadores de comparación')

console.log('Igual ==', 10 == "10")
console.log('Igual con tipo', 10 === "10" )

console.log('No igual != ', 10 != "10")
console.log('No igual con tipo !== ', 10 !== "10")

console.log('Mayor que >', 10 > 99) // 10 es mayor que 99
console.log('Menor que <', 10 < 99) // 10 es menor que 99
console.log('Mayor o igual que', 10 >= 99) 
console.log('Mayor o igual que', 100 >= "99") 

console.groupEnd()

console.group('Operadores unitarios') // Unitarios

console.log('typeof', typeof 123)

let contador = 0
contador++ // contador = contador + 1 // se lee el valor actual y después de incrementa
// ++contador // incrementa el valor y se puede ver el cambio
console.log('incremento ++', contador) // 1

contador--// contador = contador - 1
console.log('decremento --', contador)

console.groupEnd()

console.group('Operador ternario o condicional')

// condición ? valor1 : valor2 '
let esPar = 3 % 2 === 0 ? 'Es par' : 'Es impar'
                          //true      //false
console.log(esPar)

console.groupEnd()

console.group('Variables y constantes')

// var unaVariable = 0 

let numeroPequeno = 1

numeroPequeno = numeroPequeno + 1

console.log(numeroPequeno)

numeroPequeno++

console.log(numeroPequeno)

{
  let numeroPequeno = 10

  console.log(numeroPequeno)
}

const numeroFijo = 77

// numeroFijo = 78 // no se puede porque es una constante y las constantes no cambian

console.groupEnd()
