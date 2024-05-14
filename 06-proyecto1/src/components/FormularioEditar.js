import React from 'react'

export const FormularioEditar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
  const titulo_componente = "Editar movie";

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    // Get the event target "form"
    let target = e.target;

    // Get local storage data
    const pelis_saved = conseguirPeliculas();
    // Search the index
    const indice = pelis_saved.findIndex(peli => peli.id === parseInt(id))
    
    // Create object with new data
    let peli_updated = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    }


    // Update localStorage item with index and new info
    console.log(peli_updated)
    pelis_saved[indice] = peli_updated;

    // Update useState
    setListadoState(pelis_saved);
    setEditar(0);
    // Save in localStorage
    localStorage.setItem('pelis', JSON.stringify(pelis_saved));

  };

  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <form onSubmit={e => guardarEdicion(e, peli.id)}>
        <input
          type='text'
          name='titulo'
          className='titulo_editado'
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className='descripcion_editada'
        />
        <input type='submit' className='editar' value="Update"/>
      </form>
    </div>
  )
}
