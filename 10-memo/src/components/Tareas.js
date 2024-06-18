import React, { useMemo, useState } from 'react'

export const Tareas = () => {

  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(0);

  const guardarTareas = e => {
    e.preventDefault();
    let tareas_actualizadas = [...tareas, e.target.descripcion.value];
    setTareas(tareas_actualizadas);
    e.target.descripcion.value = '';
    // Make focus on e.target.descripcion
    e.target.descripcion.focus();
  }
  
  const borrarTarea = id => {
    // Filter tareas
    let new_tareas = tareas.filter((tarea, index) => (index !== id));
    console.log(new_tareas);

    // Set State, new list of tasks
    setTareas(new_tareas);
  }

  const sumarContador = e => {
    // Use hook Memo for saving the total account of tasks in the program
    setContador(contador + 1);
  };

  const contadoresPasados = (acumulacion) => {
    for (let i = 0; i <= acumulacion; i++) {
      console.log('Ejectuando acumulacion de contadores del pasado ....');
      console.log('Se le sumo ' + i + ' al contador');
    }
    return `Contador manual de tareas: ${acumulacion}`;
  }

  const memoContadores = useMemo(()=> contadoresPasados(contador), [contador]);

  return (
    <div className='tareas-container'>
      <h1>Mis Tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type='text' name='descripcion' placeholder='Describe la tarea'/>
        <input type='submit' value="Guardar"/>
      </form>
      <h3>{memoContadores}</h3>
      <button onClick={sumarContador}>+</button>
      <hr/>
      <h2>Lista de tareas</h2>
      <ul>
        {
          tareas.map((tarea, index) => (
            <li key={index}>
              {tarea}
              &nbsp;
              <button onClick={() =>borrarTarea(index)}>X</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
