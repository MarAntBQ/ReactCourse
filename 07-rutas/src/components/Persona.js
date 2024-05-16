import React from 'react'
import { useParams } from 'react-router'

export const Persona = () => {
  const {nombre, apellido} = useParams();
  //console.log(parametros)
  return (
    <div>
      <h1>Página de Persona: {nombre+' '+apellido}</h1>
    </div>
  )
}
