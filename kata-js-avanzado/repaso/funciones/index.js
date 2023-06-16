function cobrar(lista, nombre) {
  let total = 0

  console.group(`Lista de compras de ${nombre}`)
  for (let index = 0; index < lista.length; index++) {
    console.log(`${lista[index].name} -- $${lista[index].precio}`)

    total += lista[index].precio
  }

  console.log('Total a pagar: $', total)

  console.groupEnd()
}

const listaComprasEder = [
  { name: 'Refresco', precio: 13 },
  { name: 'Sopa', precio: 20 },
  { name: 'Papel de baño', precio: 40 },
  { name: 'Shampoo', precio: 34 },
]

const listaComprasMaria = [
  { name: 'Arroz', precio: 56 },
  { name: 'Frijoes', precio: 10 },
  { name: 'Pan dulce', precio: 3 },
  { name: 'Pechuga de pollo', precio: 100 },
]

cobrar(listaComprasEder,'Eder')

cobrar(listaComprasMaria, 'Maria')


console.group('Funciones flecha')

setTimeout(() => {
  console.log('Esto es una funcion flecha')
},1000)


const sumar = (a,b) => {
  return a + b
}

function restar(a,b) {
  return a - b
}

console.log('3 + 4 = ', sumar(3,4))
console.log('3 - 4 = ', restar(3,4))

function imprimirTexto() {
  console.log('Soy un texto')
}

setTimeout(imprimirTexto, 1000)
setTimeout(function () {
  console.log('Soy otro texto')
}, 1000)

console.groupEnd()