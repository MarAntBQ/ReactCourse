import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <>
      <h1>Page not Found</h1>
      <strong>Error 404</strong>
      <p><Link to="/">Go to Home</Link></p>
    </>
  )
}
