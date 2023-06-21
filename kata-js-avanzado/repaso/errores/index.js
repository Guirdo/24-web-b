// Las excepciones son errores que detienen
// el curso normal de un programa

/* try {
  const numero = 2

  numero = 10
  
  console.log(numero)
} catch(error) {
  alert('Un error paso, contacta al programador')
} finally {
  console.log('Este es el finally')
}

console.log('Hola estoy despues del error') */

class ValidacionError extends Error {
  constructor(message){
    super(message)
    this.name = 'ValidacionError'
  }
}

class BaseDatosError extends Error {
  constructor(mensaje){
    super(mensaje)
    this.name = 'BaseDatosError'
  }
}

function validarUsuario(nickname, email, password) {
  if(!nickname) throw new ValidacionError('El nickname es obligatorio')
  if(!email) throw new ValidacionError('El email es obligatorio')
  if(!password) throw new ValidacionError('La contraseña es obligatoria')

  /* if(password.length < 4) throw new ValidacionError('Contraseña invalida') */

  buscarUsuario(email)

  return 'Usuario exitosamente validado'
}

function buscarUsuario(email) {
  let isUser = false
  if(isUser) {
    return true
  } else {
    throw new BaseDatosError('Usuario no encontrado')
  }
}

try {
  console.log(validarUsuario('seb','seb@email.com','1234'))
} catch(error) {
  if(error instanceof ValidacionError) {
    console.log('Esto es un error de validacion')
  }

  if(error instanceof BaseDatosError) {
    console.log('Esto es un error de la base de datos')
  }
}

console.log('Hola estoy despues del error')

