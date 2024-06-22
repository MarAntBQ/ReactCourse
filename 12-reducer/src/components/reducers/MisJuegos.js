import React from 'react'

export const MisJuegos = () => {
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
      <form>
        <input type="text" name="game" placeholder='Titulo' />
        <textarea name="description" placeholder='Descripción'></textarea>
        <button type="submit">Add Game</button>
      </form>
    </div>
  )
}
