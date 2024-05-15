import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';


export const AddPelicula = ({setListadoState}) => {
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

    // Update Main List
    setListadoState(elementos => {
      return [...(elementos || []), peli];
    });

    // Save in Local Storage
    GuardarEnStorage("pelis", peli);
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
