import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');

  const searchPelicula = (e) => {
    setBusqueda(e.target.value)

    let pelis_encontradas = listadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    if (busqueda.length <= 1 || busqueda.length <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
    }

    console.log(pelis_encontradas);

    setListadoState(pelis_encontradas);
  }

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      <form onSubmit={e=> searchPelicula}>
        <input type="text"
          id="search_field"
          name="busqueda"
          autoComplete='off'
          onChange={searchPelicula}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  )
}
