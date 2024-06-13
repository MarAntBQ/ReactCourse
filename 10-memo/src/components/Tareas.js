import React from 'react'

export const Tareas = () => {

  return (
    <div className='tareas-container'>
      <h1>Mis Tareas</h1>
      <form>
        <input type='text' title='descripcion' placeholder='Describe la tarea'/>
        <input type='submit' value="Guardar"/>
      </form>
      <hr/>
      <h2>Lista de tareas</h2>
    </div>
  )
}
