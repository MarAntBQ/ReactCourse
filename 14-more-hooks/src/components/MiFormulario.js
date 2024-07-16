import React, { useState } from 'react'

export const MiFormulario = () => {

    const [formulario, setFormulario] = useState({});

    const serializarForm = (form) => {
        // Using this JS function to get the form data
        const formData = new FormData(form);
        console.log(formData)

        const completeObject = {};

        // It's passing each item and assigning the value
        for (let [name, value] of formData) {
            completeObject[name] = value;
        }
        // Return this object
        return completeObject;
    }

    const sent = (e) => {
        e.preventDefault();
        const target = e.target;

        let curso = serializarForm(target);

        console.log(serializarForm(target))

        setFormulario(curso);
    }

    const cambiado = ({target}) => {
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

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
