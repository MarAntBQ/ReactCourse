import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);
  
  const saveData = e => {
    e.preventDefault();
    // Get the form data
    let target = e.target;
    // Create a user object
    let user = {
      username: target.username.value,
      nombre: target.nombre.value,
      web: target.web.value
    }
    setUsuario(user);
    console.log(user);
  }

  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <form className='contact-form' onSubmit={saveData}>
        <input type='text' placeholder='Username' name='username'/>
        <input type='text' placeholder='Name' name='nombre'/>
        <input type='text' placeholder='Web' name='web'/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
