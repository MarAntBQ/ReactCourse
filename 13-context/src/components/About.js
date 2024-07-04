import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const About = () => {
  
  const dataFromContext = useContext(PruebaContext);
  return (
    <div>
      <h1>Welcome to the About Page</h1>
      {/* <p>Author: <strong>{dataFromContext.author}</strong></p> */}
    </div>
  )
}
