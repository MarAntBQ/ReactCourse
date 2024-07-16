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
  return (
    <div>
        <h1>Form</h1>
        <p>Form to store data of a course</p>
        <p><strong>Saved Course:</strong> </p>
        <pre>{JSON.stringify(formulario)}</pre>
        <form className='my-form' onSubmit={sent}>
            <input type='text' name="title" placeholder='Title:'/>
            <input type='number' name="year" placeholder='Published Year:'/>
            <textarea name="description" placeholder='Description'/>
            <input type='text' name="author" placeholder='Author:'/>
            <input type='email' name="email" placeholder='E-mail Address:'/>
            <button>Send</button>
        </form>
    </div>
  )
}
