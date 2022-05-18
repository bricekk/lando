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
        <p>&ndash; Your First quote offered.</p>
        <h1>Don't waste any more time. The time has come to realize your project.</h1>
        <p>Would you like a quote for an IT service or a personalized web/mobile application? we will give you a quote.</p>
      </div>
      <div className='welcome__container-quote'>
        <button>ASK FOR QUOTE</button>
      </div>
    </div>
  )
}

export default Welcome