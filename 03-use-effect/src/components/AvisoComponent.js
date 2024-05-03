import React, { useEffect } from 'react'

export const AvisoComponent = ({contador}) => {
  useEffect(() => {
    // When is loaded
    alert('El componente AvisoComponent Esta Cargado');
    // When is removed
    return () => {
      alert('Component Removed');
    }
  },[])
  const showAlert = e => {
    alert(contador);
  }
  return (
    <div>
      <h1>Hemos superado el 20 en el contador"</h1>
      <button onClick={showAlert}>Show Alert</button>
    </div>
  )
}
