import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <nav className='header__nav'>
          <NavLink to="/" className='header__logo'><img src={`${process.env.PUBLIC_URL}/img/header/logo.png`} alt='Logo'/></NavLink>
          <ul className='header__ul'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
