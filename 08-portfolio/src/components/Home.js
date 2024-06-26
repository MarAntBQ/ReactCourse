import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectsList } from './ProjectsList'

export const Home = () => {
  return (
    <div className='path-home'>
      <div className='home__banner'>
        <h1>Marco A. Bustillos</h1>
        <h2>Full Stack Developer</h2>
        <p><Link to="/contact">Contact me</Link></p>
      </div>
      <ProjectsList limitNum="2"/>
    </div>
  )
}
