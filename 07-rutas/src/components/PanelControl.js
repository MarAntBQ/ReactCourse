import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
      <h1>PanelControl</h1>
      <p>Select one option</p>
      <nav>
        <ul>
          <li><NavLink to="/panel/home"  className={({isActive}) => isActive ? "activado" : ""}>Home</NavLink></li>
          <li><NavLink to="/panel/crear" className={({isActive}) => isActive ? "activado" : ""}>Crear Articulos</NavLink></li>
          <li><NavLink to="/panel/gestion" className={({isActive}) => isActive ? "activado" : ""}>Gestion Usuarios</NavLink></li>
          <li><NavLink to="/panel/about" className={({isActive}) => isActive ? "activado" : ""}>About</NavLink></li>
        </ul>
      </nav>
      {/* Here is loading the component fired by the subroute in main BrowserRouter -> Routes -> Route -> Route */}
      <Outlet/>
    </div>
  )
}
