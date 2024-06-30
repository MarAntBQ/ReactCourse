import React from 'react';
import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Articles } from '../components/Articles';  
import { Contact } from '../components/Contact';
import { Login } from '../components/Login';
import { Error } from '../components/Error';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={<Home/>}></Route>
            <Route path='/home'  element={<Home/>}></Route>
            <Route path='/about'  element={<About/>}></Route>
            <Route path='/articles'  element={<Articles/>}></Route>
            <Route path='/contact'  element={<Contact/>}></Route>
            <Route path='/login'  element={<Login/>}></Route>
            <Route path='*'  element={<Error/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
