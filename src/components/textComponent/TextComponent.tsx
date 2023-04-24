import React from 'react'
// import './textComponent.scss';
import TextComponentStyles from './styles';
import Avatar from '../../assets/img/avatar-michelle.jpg'
import SocialMediaContainer from '../socialMediaContainer/SocialMediaContainer';

interface Props {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  showSocialMedia: boolean;
}

const TextComponent: React.FC<Props> = ({ handleClick, showSocialMedia }) => {
  return (
    <TextComponentStyles>
      <div className="info-text">
        <h1 className="info-h1">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p className="info-p">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
      </div>
      <div className="info-profile">
        <div className="info-profile--user">
          <img className='info-profile--avatar' src={Avatar} alt="" />
          <div className="info-profile--username">
            <h2 className="username">Michelle Appleton</h2>
            <h3 className="date">28 jun 2020</h3>
          </div>
        </div>
        <div 
          className={`info-profile--share ${showSocialMedia ? 'activated' : ''}`} onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path fill={showSocialMedia ? 'white' : '#6E8098'} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
          </svg>
        </div>
        {showSocialMedia &&
          <SocialMediaContainer />
        }
      </div>
    </TextComponentStyles>
  )
}

export default TextComponent