import React from 'react'

export const MisJuegos = () => {

  const conseguirDatos = e => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.game.value,
      descripcion: e.target.description.value
    }

    console.log(juego);
  }

  return (
    <div>
      <h1> Estos son mis Vídeo Juegos</h1>
      <p>Número de vídeo Juegos: 15</p>
      <ul>
        <li>Free Fire</li>
        <li>Quake 3 Arena</li>
        <li>Monopoli</li>
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
