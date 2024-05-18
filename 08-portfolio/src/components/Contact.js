import React from 'react'

export const Contact = () => {
  return (
    <div className='path-contact'>
      <div className='contact__intro'>
        <h1>Contact me</h1>
        <hr/>
        <p>Job inquiry? Just want to say hi? Get in touch.</p>
      </div>
      <div className='contact__form'>
        <form>
          <input placeholder='Name' type='text'/>
          <input placeholder='Last Name' type='text'/>
          <input placeholder='Email' type='email'/>
          <textarea placeholder='Message'/>
          <input type="submit" value="Send Message"/>
        </form>
      </div>
    </div>
  )
}
