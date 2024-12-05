import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://www.linkedin.com/in/5ld0v123/' target='_blank'>
        <div>
          <AiFillLinkedin />
        </div>
      </a>
      <a href='https://www.facebook.com/profile.php?id=100014737784701' target='_blank'>
        <div>
          <FaFacebookF />
        </div>
      </a>
      <a href='https://www.instagram.com/5ld0v.1/' target='_blank'>

        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
