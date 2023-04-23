import React from 'react'
import Twitter from '../../assets/img/icon-twitter.svg'
import Facebook from '../../assets/img/icon-facebook.svg'
import Pinterest from '../../assets/img/icon-pinterest.svg'
import './socialMediaContainer.scss'

const SocialMediaContainer = () => {
  return (
    <>
      <div className='social-container'>
        <h1 className='social-container--title'>share</h1>
        <div className="social-container--networks">
          <img className='social-icon' src={Facebook} alt="" />
          <img className='social-icon' src={Twitter} alt="" />
          <img className='social-icon' src={Pinterest} alt="" />
        </div>
      </div>
    </>
  )
}

export default SocialMediaContainer