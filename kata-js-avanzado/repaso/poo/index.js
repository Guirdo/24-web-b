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