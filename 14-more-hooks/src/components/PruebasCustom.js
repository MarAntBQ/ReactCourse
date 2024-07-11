import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {
    const {mayusculas, minusculas, concatenar } = useMayus("marantbq.dev");

    console.log(minusculas());
  return (
    <div>
        <h1>Testing customized Components</h1>
        <p>Test</p>
    </div>
  )
}
