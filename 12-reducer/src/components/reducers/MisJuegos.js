import React, { useEffect } from 'react'
import { JuegoReducer } from './JuegoReducer';

const init  = () => {
  return JSON.parse(localStorage.getItem('juegos')) || [];
}

export const MisJuegos = () => {

  const [juegos, dispatch] = React.useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('juegos', JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatos = e => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.game.value,
      descripcion: e.target.description.value
    }

    console.log(juego);

    const acccion = {
      type: 'crear',
      payload: juego
    }
    dispatch(acccion);

    console.log(juegos);
  }

  const borrarJuego = id => {
    const acccion = {
      type: 'borrar',
      payload: id
    }
    dispatch(acccion);

    console.log(juegos);
  }

  return (
    <div>
      <h1> Estos son mis Vídeo Juegos</h1>
      <p>Número de vídeo Juegos: {juegos.length}</p>
      <ul>
        {
          juegos.map(juego => (
            <li key={juego.id}>{juego.titulo} | {juego.descripcion} <button onClick={e => borrarJuego(juego.id)}>X</button></li>
          ))
        }
      </ul>
      <h3>Add Game</h3>
      <form onSubmit={conseguirDatos}>
        <input type="text" name="game" placeholder='Titulo' />
        <textarea name="description" placeholder='Descripción'></textarea>
        <button type="submit">Add Game</button>
      </form>
    </div>
  )
}
