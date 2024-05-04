import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);

  const getUsuariosEstaticos = () => {
    setUsuarios([{
      "id": 1,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    }, {
      "id":2,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    }, {
      "id": 3,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    }, {
      "id": 4,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    }, {
      "id": 5,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    }, {
      "id": 6,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }]);
  }

  const getUsuariosAjax = () => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(
        resultado_final => {
          setUsuarios(resultado_final.data)
        }, error => {
          console.log(error)
        }
      )
  }

  useEffect(() => {
    //getUsuariosEstaticos();
    getUsuariosAjax();
  }, []);

  
  return (
    <div>
      <h2>User List by Ajax</h2>
      <ol className='usuarios'>
        {usuarios.map(usuario => {
          return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
        })
        }
      </ol>
    </div>
  )
}
