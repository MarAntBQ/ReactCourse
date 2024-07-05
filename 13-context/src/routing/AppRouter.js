import React, { useContext } from 'react';
import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Articles } from '../components/Articles';  
import { Contact } from '../components/Contact';
import { Login } from '../components/Login';
import { Error } from '../components/Error';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {
  const {usuario, setUsuario} = useContext(PruebaContext);
  return (
    <BrowserRouter>
        <header>
          <nav>
          <div id="logo"><h2>Learning ReactContext</h2></div>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/articles'>Articles</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
              {usuario.hasOwnProperty("username") && usuario.username !==null ?
              (
                <>
              <li><NavLink to='/'>{usuario.username}</NavLink></li>
              <li><a href='#' onClick={e => {
                e.preventDefault();
                setUsuario({})
              }}>Logout</a></li>
              </>
            )
              : (<li><NavLink to='/login'>Login</NavLink></li>)
              }
            </ul>
          </nav>
        </header>
        <main className='content'>
        <Routes>
            <Route path='/'  element={<Home/>}></Route>
            <Route path='/home'  element={<Home/>}></Route>
            <Route path='/about'  element={<About/>}></Route>
            <Route path='/articles'  element={<Articles/>}></Route>
            <Route path='/contact'  element={<Contact/>}></Route>
            <Route path='/login'  element={<Login/>}></Route>
            <Route path='*'  element={<Error/>}></Route>
        </Routes>
        </main>
    </BrowserRouter>
  )
}
