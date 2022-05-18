import React from 'react'

import headlineImg from '../../assets/flexing.png'

import './Headline.css'

function Headine() {
  return (
    <div className='headline'>
      <div className='headline__container'>
        <div className='headline__container-text'>
          <h1>Lando is the guarantee of a fast and well done job.</h1>
          <p>A team of passionate and qualified developers ready to serve you at lightning speed.</p>
          <button>Take a look</button>
        </div>
        <div className='headline__container-img'>
          <img src={headlineImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Headine