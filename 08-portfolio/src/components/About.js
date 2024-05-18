import React from 'react'

export const About = () => {
  return (
    <div className='path-about'>
      <div className='about__intro'>
        <h1>About me</h1>
        <hr/>
        <p>Bachelor of Science in Web Design and Development from BYU-Idaho (USA) with over 7 years of experience in Front End development and 5 years in Back End development. As a passionate Full Stack Web Developer, I have worked on various projects, including websites, landing pages, web applications, e-commerce platforms, web hosting, and blogs. My dedication to continuous learning and teaching others about software drives my growth and expertise in the field. I thrive on creating impactful digital experiences and am committed to delivering high-quality web solutions.</p>
      </div>
      <div className='about__stats'>
        <h1>Stats</h1>
        <div className='stats'>
          <div className='stats__block'><span>+100</span> Projects</div>
          <div className='stats__block'><span>+10</span> Years of Experience</div>
          <div className='stats__block'><span>29</span> Certifications</div>
          <div className='stats__block'><span>+250</span> Happy Clients</div>
        </div>
      </div>
    </div>
  )
}
