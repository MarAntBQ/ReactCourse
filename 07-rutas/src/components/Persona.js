import React, {useRef} from 'react'
import { useNavigate, useParams } from 'react-router'

export const Persona = () => {
  const {nombre, apellido} = useParams();
  const navegar = useNavigate();
  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);

  const sendData = e => {
    e.preventDefault();

    let target = e.target;
    let nombre = target.nombre.value;
    let apellido = target.apellido.value;

    if (!nombre) {
      nombreRef.current.focus();
      return;
    }
    if (!apellido) {
      apellidoRef.current.focus();
      return;
    }

    let url = `/persona/${nombre}/${apellido}`;
    navegar(url);
  }

  return (
    <div>
      {!nombre && (<><h1>No hay ninguna persona que mostrar</h1>
      <form onSubmit={sendData}>
        <input type="text" name="nombre" ref={nombreRef}/>
        <input type="text" name="apellido" ref={apellidoRef}/>
        <input type="submit" name="enviar" value="Enviar"/>
      </form></>
      )}
      {nombre && <h1>Página de Persona: {nombre} {apellido}</h1>}
    </div>
  )
}
