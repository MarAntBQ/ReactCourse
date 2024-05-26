import React, { useRef } from 'react'

export const Form = () => {
  const nombreInput = useRef();
  const apellidoInput = useRef();
  const emailInput = useRef();
  const cajaDiv = useRef();

  const mostrar = e => {
    if (e) e.preventDefault();
    console.log(nombreInput.current.value)
    console.log(apellidoInput.current.value)
    console.log(emailInput.current.value)

    console.log(cajaDiv.current)

    let { current: caja } = cajaDiv;

    caja.classList.add('my-box--green');
    caja.innerHTML = '<h2>Email sent</h2>'
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <div ref={cajaDiv} className='my-box'>
        <h2>Pruebas con useRef</h2>
      </div>
      <form onSubmit={mostrar}>
        <p><input type='text' placeholder='Name' ref={nombreInput}/></p>
        <p><input type='text' placeholder='Last Name' ref={apellidoInput}/></p>
        <p><input type='email' placeholder='Email' ref={emailInput}/></p>
        <input type='submit'/>
      </form>
      <button onClick={() => {
        if (nombreInput.current.value === '') {nombreInput.current.select();} else 
        if (apellidoInput.current.value === '') {apellidoInput.current.select();} else
        if (emailInput.current.value === '') {emailInput.current.select();} else {
          mostrar();
        }
      }}
      >Click here</button>
    </div>
  )
}
