import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {
    const {estado, mayusculas, minusculas, concatenar } = useMayus("MarAntBQ.dev");

  return (
    <div>
        <h1>Testing customized Components</h1>
        <p>{estado}</p>
        <p>
            <a onClick={ mayusculas }>Mayus</a>
            &nbsp;|&nbsp;
            <a onClick={ minusculas }>Minus</a>
            &nbsp;|&nbsp;
            <a onClick={ e=> concatenar(" is my web") }>concatenar</a>
          </p>
    </div>
  )
}
