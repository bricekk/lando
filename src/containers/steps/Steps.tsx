import React from 'react'

import './Steps.css'

import phone from '../../assets/phone.png'
import i1 from '../..//assets/i1.png'
import i2 from '../..//assets/i2.png'
import i3 from '../..//assets/i3.png'
import i4 from '../..//assets/i4.png'



type stepProps = {
  title: string;
  text: string;
  img: string;
};

const Step = ({ title, text, img }: stepProps) => (
  <>
    <div className='steps__container__left-step'>
      <h2><img src={img} alt=""/> {title}</h2>
      <p>{text}</p>
    </div>
  </>
)



function Steps() {
  return (
    <div className='steps'>
      <div className='steps__container'>
        <div className='steps__container__right'>
          <div className='steps__container__right-img'>
            <img src={phone} alt=""/>
          </div>
          <div className='steps__container__right-label'>
              <h1>How it works?</h1>
              <p>Tell us about your project and we will find the right digital professionals to make it happen. Without compromise, completely transparent and only in 4 simple steps.</p>
          </div>
        </div>
        <div className='steps__container__left'>
          <Step title='Tell us about your project' img={`${i1}`} text="Tell us in detail what you need and add as much information as possible." />
          <Step title='We find the perfect team' img={`${i4}`} text="We take care to analyze your project in order to determine the right team for you." />
          <Step title="Get a quote" img={`${i3}`} text="Receive a personalized quote (or several!). Negotiate with the team and sign when everything is clear." />
          <Step title="Let's build it"  img={`${i2}`} text="At this stage everything is there. The work can finally begin, We still stay in touch." />
        </div>
      </div>
    </div>
  )
}

export default Steps