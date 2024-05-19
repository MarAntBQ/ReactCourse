import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../layout/Header';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Resume } from '../components/Resume';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { Project } from '../components/Project';
import { Error404 } from '../components/Error404';
import { Footer } from '../layout/Footer';

export const MyRoutes = () => {
  return (
    <BrowserRouter basename="/project-02-portfolio">
    <Header/>
    <main >
      <div className='main__wrapper'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/project/:id" element={<Project/>}></Route>
        <Route path="/project/" element={<Project/>}></Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
      </div>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}
