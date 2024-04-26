// Import React Modules
import React from "react";

// Component Function
export const MiComponente = () => {
  let user = {
    name: "Marco Antonio",
    lastName: "Bustillos",
    career: "Full Stack Web Developer",
    web: "marantbq.dev"
  };

  return (
  <div className="mi-component">
    <h2>Este es mi primer componente</h2>
    <h2>User Deatils</h2>
    <ul>
      <li>Nombre: <strong>{user.name} {user.lastName}</strong></li>
      <li>Career: <strong>{user.career}</strong></li>
      <li>Web: <strong>{user.web}</strong></li>
    </ul>
    <ul>
      <li>React</li>
      <li>Angular</li>
      <li>Vue</li>
      </ul>
  </div>
)
};