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
  const mouseEnter = (e, action) => {
    console.log(`The Mouse is ${action}`)
  }

  return (
    <div>
      <h1>Events on React</h1>
      <p>
        {/* Click Events */}
        <button onClick={ e => isClicked(e, "Marco Antonio") }>One Click</button>
      </p>
      <p>
        {/* Click Events doble */}
        <button onDoubleClick={ dobleClick }>Double Click</button>
      </p>
      <div id="events__box"
        onMouseEnter={ e => mouseEnter(e, "entering") }
        onMouseLeave={ e => mouseEnter(e, "leaving") }
      >
        Move the mouse over this!!
      </div>
    </div>
  )
}
