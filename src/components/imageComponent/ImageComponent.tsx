import React from 'react'
import Drawers from '../../assets/img/drawers.jpg'
import './imageComponent.scss';

const ImageComponent = () => {
  return (
    <>
      <div className="app-content--img">
        <img src={Drawers} alt="" />
      </div>
    </>
  )
}

export default ImageComponent