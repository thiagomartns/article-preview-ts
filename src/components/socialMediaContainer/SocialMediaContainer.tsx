import React from 'react'
import Twitter from '../../assets/img/icon-twitter.svg'
import Facebook from '../../assets/img/icon-facebook.svg'
import Pinterest from '../../assets/img/icon-pinterest.svg'
// import './socialMediaContainer.scss'
import SocialMediaContainerStyles from './styles'

const SocialMediaContainer = () => {
  return (
    <SocialMediaContainerStyles>
      <h1 className='social-container--title'>share</h1>
      <div className="social-container--networks">
        <img className='social-icon' src={Facebook} alt="" />
        <img className='social-icon' src={Twitter} alt="" />
        <img className='social-icon' src={Pinterest} alt="" />
      </div>
    </SocialMediaContainerStyles>
  )
}

export default SocialMediaContainer