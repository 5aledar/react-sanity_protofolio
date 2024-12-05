import React, { useState } from 'react'
import images from '../../constants/images'
import { AppWrap, MotionWrap, NotionWrap } from '../../wrapper/index'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true)
      })
  }
  return (
    <>
      <h2 className='head-text'>Take a coffe and chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:khaledabdalslam99@gmail.com' className='p-text'>khaledabdalslam99@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +963 (982) 275-671' className='p-text'>+963 (982) 275-671</a>
        </div>
      </div>
      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' value={name} name='name' onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' name='email' placeholder='Your Email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'sending..' : 'Send Email'}</button>
        </div>
        : <div> 
            <h3 className='head-text'>Thank you for getting in tuch!</h3>
          </div>}
    </>
  )
}


export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
