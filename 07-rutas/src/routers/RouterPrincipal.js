import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';
import { Header } from '../includes/Header';
import { Footer } from '../includes/Footer';
import { Persona } from '../components/Persona';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/contact' element={<Contacto/>}/>
          <Route path='/articles' element={<Articulos/>}/>
          <Route path='/persona/:nombre/:apellido' element={<Persona/>}></Route>
          <Route path='/persona/:nombre' element={<Persona/>}></Route>
          <Route path='/persona/' element={<Persona/>}></Route>
          <Route path='/redirigir' element={<Navigate to="/persona/Marco/Bustillos"/>}></Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}
