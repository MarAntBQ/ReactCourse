import React, { useId } from 'react'

export const MiComponente = () => {

    const id = useId();
    const second_id = useId();
    const third_id = useId();

    console.log(third_id)
  return (
    <div>
        <h1>Hook useId</h1>
        <input id={id} name="nombre" placeholder='Nombre'/>
    </div>
  )
}
