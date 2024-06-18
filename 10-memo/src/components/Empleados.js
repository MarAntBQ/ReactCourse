import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(
({pagina, mensaje}) => {
  const [empleados, setEmpleados] = useState([]);
    
  useEffect(() => {
      getEmployees(pagina);
      mensaje();
  }, [pagina]);
  useEffect(() => {
    console.log('Employees has been updated!');
  },[empleados]);

  
    
    const getEmployees = async (p) => {
      const url = 'https://reqres.in/api/users?page='+p;
      const peticion = await fetch(url);
      // I'm destructuring the data property from the response object and saving it in a variable called empleados
      const {
        data: empleados
      } = await peticion.json();

      setEmpleados(empleados);
    }

    return (
      <>
        <p>Showing page number: {pagina}</p>
        <ul className='empleados'>
          { empleados.length >= 1 &&
            empleados.map((empleado) => {
              return <li key={empleado.id}>{empleado.first_name + ' ' + empleado.last_name}</li>
            }
            )}
        </ul>
      </>
    )
}
)
