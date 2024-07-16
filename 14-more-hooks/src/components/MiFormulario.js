import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

    const {formulario, cambiado, sent} = useForm({});

    

  return (
    <div>
        <h1>Form</h1>
        <p>Form to store data of a course</p>
        <p><strong>Saved Course:</strong> {formulario.title} </p>
        <pre className='code'>{JSON.stringify(formulario)}</pre>
        <form className='my-form' onSubmit={sent}>
            <input type='text' name="title" placeholder='Title:' onChange={cambiado}/>
            <input type='number' name="year" placeholder='Published Year:' onChange={cambiado}/>
            <textarea name="description" placeholder='Description' onChange={cambiado}/>
            <input type='text' name="author" placeholder='Author:' onChange={cambiado}/>
            <input type='email' name="email" placeholder='E-mail Address:' onChange={cambiado}/>
            <button>Send</button>
        </form>
    </div>
  )
}
