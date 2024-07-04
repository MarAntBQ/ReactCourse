import React, {useContext} from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Home = () => {
  const {usuario,setUsuario} = useContext(PruebaContext);
  //console.log(contextShared);
  return (
    <div>
      <h1>Welcome to the Home Page created by: {usuario.nombre}</h1>
      <hr/>
      <p>My Web is: {usuario.web}</p>
    </div>
  )
}
