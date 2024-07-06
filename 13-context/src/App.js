import { useState, useEffect } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    let usuarioLocal = localStorage.getItem('usuario');
    setUsuario(JSON.parse(usuarioLocal));
  }, []);

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario])


  const course = {
    id: 1,
    title: 'React in Action',
    content: 'Learn to build React Applications with this course.',
    author: 'MarAnBQ'
  }

  return (
    <div className="App">
      <PruebaContext.Provider value={{
        usuario,setUsuario
      }}>
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
