import React from 'react'

export const SegundoComponente = () => {
  const books = ['La Libelula Purpura', 'MGDA', 'The Third Missionary'];
  //const books = [];
  return (
    <div>
      <h1>Book List</h1>
      {books.length >= 1 ?
      (<ul>
      {
        books.map((book, index) => {
          return <li key={index}>{book}</li>
        })
      }
      </ul>)
      : (<p>There are not books</p>)
      }
    </div>
  )
}
