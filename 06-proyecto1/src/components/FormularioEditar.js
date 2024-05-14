import React from 'react'

export const FormularioEditar = ({peli}) => {
  const titulo_componente = "Editar movie"
  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <form>
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
