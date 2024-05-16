import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';
import { Header } from '../includes/Header';
import { Footer } from '../includes/Footer';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/contact' element={<Contacto/>}/>
          <Route path='/articles' element={<Articulos/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}
