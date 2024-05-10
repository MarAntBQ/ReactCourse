import React, { useState } from 'react'

export const AddPelicula = () => {
  const tituloComponent = "Añadir Pelicula";

  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  });

  const {titulo, descripcion} = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }
    // Save State
    setPeliState(peli)
    // Save in Local Storage
    guardarEnStorage(peli);
  }

  const guardarEnStorage = peli => {
    // Get LocalStorage
    let elementos = JSON.parse(localStorage.getItem('pelis'));

    // Check if is an array
    if (Array.isArray(elementos)) {
      // Add a new element
      elementos.push(peli);
    } else {
      // Create an array with the new peli
      elementos = [peli];
    }

    // Save in the LocalStorage
    localStorage.setItem('pelis', JSON.stringify(elementos));
    // Return object saved
    return peli;
  }

  return (
    <div className="add">
      <h3 className="title">{tituloComponent}</h3>
      <strong>
      {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
          <input type="text"
                      id="titulo"
                      name="titulo"
                      placeholder="Titulo"
          />
          <textarea id="descripcion"
                          name="descripcion"
                          placeholder="Descripción"
          ></textarea>
          <input type="submit" 
                      id="save"
                      value="Guardar" />
      </form>
    </div>
  )
}
