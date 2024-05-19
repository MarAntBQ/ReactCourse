import React from 'react'
import {projects} from '../data/projects'
import { Link } from 'react-router-dom';

export const ProjectsList = ({limitNum = 10}) => {

  return (
    <div className='portfolio__work-experience'>
        {projects.slice(0,limitNum).map(work => {
          return(
          <article key={work.id}>
            <div className='mask'>
              <img src={`${process.env.PUBLIC_URL}/img/projects/${work.id}.jpg`} alt={`${work.name} project screen shoot`} />
            </div>
            <h2>{work.name}</h2>
            <h3>{work.techstack}</h3>
            <p>{work.date}</p>
            <Link to={"/project/"+work.id}>View</Link>
          </article>
          );
        })}
      </div>
  )
}
