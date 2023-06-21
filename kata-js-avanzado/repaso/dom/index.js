// DOM es la representacion de los nodos/elementos/etiquetas
// de nuestro documento HTML
// DOM nos ofrece una interfaz para trabajar con estos elementos
// de HTML en JavaScript

// Obtener elementos especificos
// Obtener elemento HTML por ID

console.group('obtener elementos')
const parrafo1 = document.getElementById('parrafo1')
console.log(parrafo1)


//Obtener elementos por su etiqueta
const parrafos = document.getElementsByTagName('p')

console.log(parrafos)

const parrafosCorto = document.getElementsByClassName('corto')

console.log(parrafosCorto)

console.groupEnd()

const companeros = [
  'Josue',
  'Alan',
  'Maria',
  'Rodrigo',
  'Salvador',
  'Mali'
]

const elementoSpan = document.getElementById('companero')

let contador = 0

setInterval(() => {
  elementoSpan.innerHTML = 
    companeros[contador % companeros.length]
              // 0    %     6 = 0
              // 1    %     6 = 1
              //...
              // 5    %     6 = 5
              // 6    %     6 = 0
              // 7    %     6 = 1
  contador++
}, 800)

setTimeout(() => {
  parrafo1.innerHTML = 'Esto es un nuevo texto que puse desde JS'
},2000)

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  console.log('Click')
})
