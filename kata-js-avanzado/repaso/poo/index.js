console.group('Objetos')

// Un objeto es una coleccion de llaves (keys) y valores (values)
const persona = {
  nombre: 'Sebastian', 
  edad: 25,
  curp: 'RIGA090909JDKJGLF',
  sexo: 'M',
  nacionalidad: 'Mexicana',
  saludar: () => console.log('Hola a todos')
}

console.log(persona)
console.log(persona.nombre)
persona.saludar()

console.groupEnd()

console.group('Clases e instancias')

class Persona {
  constructor(nombre, sexo) {
    // Atributos de la clase
    this.nombre = nombre
    this.sexo = sexo
  }

  // Metodos // las capacidades de esa clase
  saludar() {
    console.log(`Hola! Soy ${this.nombre}!`)
  }
}

// Instancias de una clase
const alexis = new Persona('Alexis', 'H')
const maria = new Persona('Maria', 'M')
const salvador = new Persona('Salvador', 'H')

alexis.saludar()
maria.saludar()
salvador.saludar()

console.groupEnd()

// Herencia

// Clase padre
class Figura {
  constructor(ancho, largo){
    this.ancho = ancho
    this.largo = largo
  }

  get area() {
    return this.ancho * this.largo
  }

  set setAncho(nuevoAncho) {
    this.ancho = nuevoAncho
  }
}

// Clase hijo
class Cuadrado extends Figura {
  constructor(lado) {
    super(lado, lado)
  }
}

class Rectangulo extends Figura {
  constructor(ancho, largo){
    super(ancho, largo)
  }
}

const cuadrado = new Cuadrado(20)
const rectangulo = new Rectangulo(10,5)

console.log(cuadrado.area)
console.log(rectangulo.area)

class Circulo extends Figura {
  constructor(radio) {
    super(0,0)
    this.radio = radio
  }

  get area() {
    return this.radio * Math.pow(Math.PI, 2) // PI^²
  }

  get diametro() {
    return this.radio * 2
  }
}

const circulo = new Circulo(4)

console.log(circulo.area)
console.log(circulo.diametro)

class Triangulo extends Figura{
  constructor(ancho, largo) {
    super(ancho,largo)
  }

  get area() {
    return (this.ancho * this.largo) / 2
  }
}

const triangulo = new Triangulo(3,4)
console.log(triangulo.area)

/* function Vehiculo(numeroLlantas) {
  this.numeroLlantas = numeroLlantas

  function getNumeroLlantas(){
    return this.numeroLlantas
  }

  return [getNumeroLlantas]
}

const [getNumeroLlantas] = Vehiculo(4) 

console.log(getNumeroLlantas()) */
