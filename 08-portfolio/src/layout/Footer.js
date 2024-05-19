import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='footer__wrapper'>
        <p>
          <a href='https://marantbq.dev/' target='_blank' rel="noreferrer"><i className="fa-solid fa-code"></i></a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href='https://github.com/MarAntBQ/ReactCourse' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          &nbsp;
          &nbsp;
          &nbsp;
          <a href='https://www.linkedin.com/in/marantbq/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        </p>
        <p>&copy; {new Date().getFullYear()} MarAntBQ.dev - All Rights Reserved</p>
      </div>
    </footer>
  )
}
