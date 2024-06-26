import React, { useCallback, useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [nombre, setNombre] = useState('')
  const [pagina, setPagina] = useState(1);

  
  const asignarGestor = (e) => {
    setNombre(e.target.value);
    }
    
  useEffect(() => {
    console.log('This component is being rendered')
  }, [nombre, pagina]);

  const mostrarMensaje = useCallback(() => {
    console.log('I am a message from the Empleados component');
  }, [pagina]);

  return (
    <div>
      <h1>Nombre del Gestor: {nombre}</h1>
      <input type='text' onChange={asignarGestor} placeholder='Introduce tu nombre de Gestor'/>
      <h2>Listado de Empleados:</h2>
      <p>Los usuarios son gestionados por {nombre} vienen de jsonplaceholder....</p>
      <button onClick={() => {setPagina(1)}}>Page 1</button>
      <button onClick={() => {setPagina(2)}}>Page 2</button>
      <Empleados pagina={pagina} mensaje={mostrarMensaje} />
    </div>
  )
}
