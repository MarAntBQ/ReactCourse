import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';
import { Header } from '../includes/Header';
import { Footer } from '../includes/Footer';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { Home } from '../components/panel/Home';
import { About } from '../components/panel/About';
import { Gestion } from '../components/panel/Gestion';
import { Crear } from '../components/panel/Crear';

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
          <Route path='/panel/*' element={<PanelControl/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='gestion' element={<Gestion/>}/>
            <Route path='crear' element={<Crear/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}
