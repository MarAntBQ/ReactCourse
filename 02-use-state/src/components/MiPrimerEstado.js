import React, {useState} from 'react'

export const MiPrimerEstado = () => {
  /* Problem */

  const [ nombre, setNombre ] = useState("Marco");
  const cambiarNombre = (e, nombre) => {
    setNombre(nombre);
  }

  return (
    <div>
      <h3>Component: MiPrimerEstado</h3>
      <strong className='user-name'>
        {nombre}
      </strong>
      &nbsp;
      <button onClick={ e => cambiarNombre(e, "Antonio") }>Change name for Antonio</button>
      &nbsp;
      <input
        type='text'
        placeholder='Change text'
        onChange={e => cambiarNombre(e, e.target.value)}
      />
    </div>
  )
}
