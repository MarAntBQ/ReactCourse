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
      biografia: datos.biografia.value,
      enviar: datos.enviar.value
    }
    console.log(usuario);
    setUsuario(usuario)
  }

  const cambiarDatos = e => {
    console.log(e.target.name);
    let inputName = e.target.name;
    setUsuario(estado_previo => ({
        ...estado_previo,
        [inputName]: e.target.value
      })
    );
  }

  return (
    <div>
      <h1>Forms with React.js</h1>
      { usuario.enviar &&
        (<div className='label'>
        <h1>Datos del Usuario</h1>
        <ol><strong>Nombre:</strong> {usuario.nombre}</ol>
        <ol><strong>Apellido:</strong> {usuario.apellido}</ol>
        <ol><strong>Genero:</strong> {usuario.genero}</ol>
        <ol><strong>Biografia:</strong> {usuario.biografia}</ol>
      </div>)
      }
      <form onSubmit={conseguirDatosForm}>
        <input type='text'
          name="nombre"
          placeholder='Nombre'
          onChange={cambiarDatos}
        />
        <input type='text'
          name="apellido"
          placeholder='Apellido'
          onChange={cambiarDatos}
        />
        <select name="genero"
          onChange={cambiarDatos}
        >
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea 
          name="biografia"
          placeholder='Biografia'
          onChange={cambiarDatos}
        ></textarea>
        <input type='submit' value="Enviar" name='enviar'/>
      </form>
    </div>
  )
}
