import React, { useEffect } from 'react'

export const Listado = ({listadoState, setListadoState}) => {

  useEffect(()=> {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas  = () => {
    let peliculas = JSON.parse(localStorage.getItem('pelis'));
    setListadoState(peliculas);
    return peliculas;
  }

  const borrarPeli = (id) => {
    // Get all pelis
    let pelis_saved = conseguirPeliculas();

    // Filter the movies to delete from the array the peli by id
    let new_array_peliculas = pelis_saved.filter(peli => peli.id !== parseInt(id));
    // Update ListadoState
    setListadoState(new_array_peliculas);
    // Update local Storage
    localStorage.setItem('pelis', JSON.stringify(new_array_peliculas));
  }

  return (
    <>
      {listadoState != null ? listadoState.map(peli =>{
        return(
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit">Editar</button>
            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
          </article>
        );
        })
        : <h2>There are not movies to show</h2>
      }
    </>
  )
}
