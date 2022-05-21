import React from 'react'

import welcomeImg from '../../assets/wel.png'

import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome__container'>
      <div className='welcome__container-img'>
        <img src={welcomeImg} alt='' />
      </div>
      <div className='welcome__container-text'>
        <p className='text_to_blur'>&ndash; Your First quote offered.</p>
        <h1>Don't waste any more time. The time has come to realize your project.</h1>
        <p className='text_to_blur'>Would you like a quote for an IT service or a personalized web/mobile application?</p>
      </div>
      <div className='welcome__container-quote'>
        <button>GET A QUOTE</button>
      </div>
    </div>
  )
}

export default Welcome