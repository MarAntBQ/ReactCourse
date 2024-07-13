import React, { useState } from 'react'

export const MiFormulario = () => {

    const [formulario, setFormulario] = useState({});

    const sent = (e) => {
        e.preventDefault();
        const target = e.target;

        let course = {
            title: target.title.value,
            year: target.year.value,
            description: target.description.value,
            author: target.author.value,
            email: target.author.email,
        };
        setFormulario(course);
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
