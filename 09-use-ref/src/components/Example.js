import React, { useEffect, useRef, useState } from 'react'

export const Example = () => {
  const [greetingCounter, setGreetingCounter] = useState(0);
  // References are always changing
  const greetingsInQueue = useRef(greetingCounter);

  useEffect(() => {
    greetingsInQueue.current = greetingCounter;
    setTimeout(() => {
      console.log("Menssages in process: " + greetingsInQueue.current)
      //console.log("Menssages in process: " + greetingCounter)
    }, 2000)
  }, [greetingCounter]);

  const sayHi = e => {
    setGreetingCounter(greetingCounter + 1);
  }
  return (
    <div>
      <h1>Example with useRef</h1>
      <h2>Greetings sent: {greetingCounter}</h2>
      <button onClick={sayHi}>Say hi!! 👋🏻</button>
    </div>
  )
}
