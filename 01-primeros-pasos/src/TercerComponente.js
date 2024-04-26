import React from 'react'

export const TercerComponente = ({name, lastname, userInfo}) => {
  return (
    <div className='tercer-componente'>
      <h1>Communication between components</h1>
      <p>Welcome {name + ' '+ lastname}</p>
      <p>Your email {userInfo.email}</p>
      <p>Your phone {userInfo.phone}</p>
    </div>
  )
}
