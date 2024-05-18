import React from 'react'

export const Services = () => {
  return (
    <div className='path-services'>
      <div className='services__intro'>
        <h1>My Services</h1>
        <hr/>
        <p>ver the years, I've honed a diverse set of skills, each one finely tuned to tackle your project with precision and creativity. From web design to hosting management, my expertise spans a wide spectrum, ensuring comprehensive solutions tailored to your needs.</p>
      </div>
      <div className='services__list'>
        <h1>Meet My Services</h1>
        <hr/>
        <div className='services-list'>
          <article className='services-list__item'>
            <h1>Web Design</h1>
            <p>7 years of experience in Front End development</p>
          </article>
          <article className='services-list__item'>
            <h1>Web Development</h1>
            <p> 5 years in Back End development</p>
          </article>
          <article className='services-list__item'>
            <h1>E-commerce</h1>
            <p> 3 years in Online Stores Creation</p>
          </article>
          <article className='services-list__item'>
            <h1>Web Sites</h1>
            <p> 3 years in Websites Creation with WordPress &amp; Divi</p>
          </article>
          <article className='services-list__item'>
            <h1>Software Instructor</h1>
            <p>5 years in Teaching courses in Youtube and Udemy</p>
          </article>

        </div>
      </div>
    </div>
  )
}
