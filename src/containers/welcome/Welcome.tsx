import React from 'react'

import welcomeImg from '../../assets/wel.png'

import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome__container section__margin'>
      <div className='welcome__container-img'>
        <img src={welcomeImg} alt='' />
      </div>
      <div className='welcome__container-text'>
        <p>&ndash; Your First quote offered.</p>
        <h1>Don't waste any more time. The time has come to realize your project.</h1>
      </div>
      <div className='welcome__container-quote'>
        <button>ASK FOR QUOTE</button>
      </div>
    </div>
  )
}

export default Welcome