import React, { useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [nombre, setNombre] = useState('')

  console.log('This component is being rendered')

  const asignarGestor = (e) => {
    setNombre(e.target.value);
  }

  return (
    <div>
      <h1>Nombre del Gestor: {nombre}</h1>
      <input type='text' onChange={asignarGestor} placeholder='Introduce tu nombre de Gestor'/>
      <h2>Listado de Empleados:</h2>
      <p>Los usuarios son gestionados por {nombre} vienen de jsonplaceholder....</p>
      <Empleados />
    </div>
  )
}
