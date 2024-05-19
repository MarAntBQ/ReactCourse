import React from 'react'
import { Link } from 'react-router-dom'
import {projects} from '../data/projects'

export const Portfolio = () => {
  return (
    <div className='path-portfolio'>
      <div className='portfolio__intro'>
        <h1>My portfolio</h1>
        <hr/>
        <p>Discover my portfolio about my web design, e-commerce, educational courses, and online systems showcasing versatility and expertise.</p>
      </div>
      <div className='portfolio__work-experience'>
        {projects.map(work => {
          return(
          <article key={work.id}>
            <div className='mask'>
              <img src={"/img/projects/"+work.id+".jpg"} alt={work.name+" image"}/>
            </div>
            <h2>{work.name}</h2>
            <h3>{work.techstack}</h3>
            <p>{work.date}</p>
            <Link to={"/project/"+work.id}>View</Link>
          </article>
          );
        })}
      </div>
    </div>
  )
}
