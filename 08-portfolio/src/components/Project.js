import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {projects} from '../data/projects'

export const Project = () => {
  
  const [project, setProject] = useState({});
  const params = useParams();
  const navegar = useNavigate();

  useEffect(() => {
    let project = projects.filter(project => project.id === params.id);
    if (project.length === 0) {
      navegar('/portfolio');
    } else {
      setProject(project[0]);
    }
  }, []); // Execute only oncef

  return (
    <div className='path-project'>
      <div className='project__intro'>
        <h1>{project.name}</h1>
        <hr/>
        <img src={`${process.env.PUBLIC_URL}/img/projects/${params.id}.jpg`} alt={`${params.name} project screen shoot`} />
        <hr/>
        <p>{project.description}</p>
        <ul>
          <li><strong>Tech Stack:</strong> {project.techstack}</li>
          <li><strong>Date:</strong> {project.date}</li>
        </ul>
        <Link to={project.url} className='btn btn--center' target='_blank'>Go to Project</Link>
      </div>
    </div>
  )
}
