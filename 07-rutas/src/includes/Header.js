import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "activado" : ""}
              >Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articles"
                className={({isActive}) => isActive ? "activado" : ""}
              >Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/contact"
                className={({isActive}) => isActive ? "activado" : ""}
              >Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/persona"
                className={({isActive}) => isActive ? "activado" : ""}
              >Persona</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  )
}
