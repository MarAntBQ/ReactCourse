import React from 'react'

export const EventosComponente = () => {
  const isClicked = (e, userName) => {
    console.log(e)
    alert(`Hi I'm an event on click for you ${userName}`)
  };
  function dobleClick(e) {
    console.log(e)
    alert(`You clicked twice`)
  }
  return (
    <div>
      <h1>Events on React</h1>
      <p>
        {/* Click Events */}
        <button onClick={ e => isClicked(e, "Marco Antonio") }>Click Here # 1</button>
      </p>
      <p>
        {/* Click Events doble */}
        <button onDoubleClick={ dobleClick }>Click Here # 2</button>
      </p>
    </div>
  )
}
