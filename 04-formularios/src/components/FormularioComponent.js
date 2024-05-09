import React, { useState } from 'react'

export const FormularioComponent = () => {

  const [usuario, setUsuario] = useState({})

  const conseguirDatosForm = e => {
    e.preventDefault();
    let datos = e.target;

    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      biografia: datos.bio.value,
    }
    console.log(usuario);
    setUsuario(usuario)
  }

  if (Object.keys(usuario).length === 0) {
    return (
      <div>
        <h1>Forms with React.js</h1>
        <form onSubmit={conseguirDatosForm}>
          <input type='text'
            name="nombre"
            placeholder='Nombre'/>
          <input type='text'
            name="apellido"
            placeholder='Apellido'/>
          <select name="genero">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
          <textarea 
            name="bio"
            placeholder='Biografia'></textarea>
          <input type='submit' value="Enviar"/>
        </form>
      </div>
    )
  } else {
    return(
      <div className='label'>
        <h1>Datos del Usuario</h1>
        <ol><strong>Nombre:</strong> {usuario.nombre}</ol>
        <ol><strong>Apellido:</strong> {usuario.apellido}</ol>
        <ol><strong>Genero:</strong> {usuario.genero}</ol>
        <ol><strong>Biografia:</strong> {usuario.biografia}</ol>
      </div>
    )
  }
}
