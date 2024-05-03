import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Marco Antonio");
  const [fecha, setFecha] = useState("01-01-1996");
  const [contador, setContador] = useState(0);

  const modUsuario = e => {
    setUsuario(e.target.value);
  };

  const modFecha = e => {
    setFecha(Date.now())
  }

  // Making only when it is changed on loading the component
  useEffect(() => {
    console.log('The component was loaded PruebasComponent or you had made a change');
  }, []);
  // Making only when the user is changed
  useEffect(() => {
    console.log('The component was changed the User');
    setContador(contador + 1);
  }, [fecha, usuario]);

  return (
    <div>
      <h1>The Effect - useEffect</h1>
      <strong className='label'>{usuario} / {fecha}</strong>
      <strong className={contador >= 10 ? 'label label--green' : 'label' }>{contador}</strong>
      &nbsp;
      <div>
        <input type='text' 
        onChange={modUsuario}
        placeholder='Change Name'/>
        &nbsp;
        <button onClick={modFecha}>Change</button>
      </div>
    </div>
  )
}
