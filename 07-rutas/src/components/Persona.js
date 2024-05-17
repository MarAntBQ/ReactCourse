import React from 'react'
import { useParams } from 'react-router'

export const Persona = () => {
  const {nombre, apellido} = useParams();
  //console.log(parametros)
  return (
    <div>
      {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
      {nombre && <h1>Página de Persona: {nombre} {apellido}</h1>}
    </div>
  )
}
