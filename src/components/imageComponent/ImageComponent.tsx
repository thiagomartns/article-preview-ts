import React from 'react'
import ImageComponentStyles from './styles';
import Drawers from '../../assets/img/drawers.jpg'
import './imageComponent.scss';

const ImageComponent = () => {
  return (
    <ImageComponentStyles>
      <img src={Drawers} alt="" />
    </ImageComponentStyles>
  )
}

export default ImageComponent