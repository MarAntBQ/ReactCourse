import React from 'react'
import { ProjectsList } from './ProjectsList'

export const Portfolio = () => {
  return (
    <div className='path-portfolio'>
      <div className='portfolio__intro'>
        <h1>My portfolio</h1>
        <hr/>
        <p>Discover my portfolio about my web design, e-commerce, educational courses, and online systems showcasing versatility and expertise.</p>
      </div>
      <ProjectsList/>
    </div>
  )
}
