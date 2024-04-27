import React from 'react';
import PropTypes from "prop-types";

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

TercerComponente.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string,
  userInfo: PropTypes.object,
}

TercerComponente.defaultProps = {
  name: "Antonio",
  lastname: "Admin"
}