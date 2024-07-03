import React, {useContext} from 'react';
import { PruebaContext } from '../context/PruebaContext';

export const Home = () => {
  const contextShared = useContext(PruebaContext);
  return (
    <div>
      <h1>Welcome to the Home Page created by: {contextShared.author}</h1>
    </div>
  )
}
