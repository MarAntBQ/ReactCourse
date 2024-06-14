import React, { useState } from 'react'

export const Tareas = () => {

  const [tareas, setTareas] = useState([]);

  const guardarTareas = e => {
    e.preventDefault();
    let tareas_actualizadas = [...tareas, e.target.descripcion.value];

    setTareas(tareas_actualizadas);
    console.log(tareas);
  }
  return (
    <div className='tareas-container'>
      <h1>Mis Tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type='text' name='descripcion' placeholder='Describe la tarea'/>
        <input type='submit' value="Guardar"/>
      </form>
      <hr/>
      <h2>Lista de tareas</h2>
      <ul>
        {
          tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))
        }
      </ul>
    </div>
  )
}
