import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {

  const [mostrar, setMostrar] = useState(false); 

  const caja = useRef();
  const boton = useRef();
  
  useLayoutEffect(() => {
    console.log('useLayoutEffect: Componente Cargado')
  }, []);
  useLayoutEffect(() => {
    console.log('useEffect: Componente Cargado')
    if (caja.current == null) return
    const {bottom} = boton.current.getBoundingClientRect();
    //console.log(bottom)
    caja.current.style.marginTop = `${bottom + 45}px`;
    
    // setTimeout(() => {
    // }, 1000);

    console.log(boton);



  }, [mostrar]);

  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      <button
        ref={boton}
        onClick={() => setMostrar(prev => {
          console.log(prev, !prev)
          return !prev;
        })}
      >
        Mostrar Mensaje</button>
      {mostrar && (
      <div id="caja" ref={caja}>
        Hola, soy un mensaje {mostrar}
      </div>
      )}
    </div>
  )
}
