import React from 'react'

import logoLight from '../../assets/logo.png'
import logoDark from '../../assets/logoDark.png'


import './Footer.css'

function Footer() {

  const getLogo = () => {
    let theme = localStorage.getItem("theme");
    return theme==="light"? logoLight : logoDark
  };

  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__container-credits'>
          <div className='footer__container-credits-logo'>
            <img src={getLogo()} alt="" />
          </div>
          <p>2022 &copy; Lando<br />All rights reserved</p>
        </div>
        <div className='footer__container__links'>
          <div className=''>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="home">Pricing</a></li>
              <li><a href="home">About us</a></li>
              <li><a href="home">Contact</a></li>
            </ul>
          </div>
          <div className=''>
            <ul>
              <li><a href="home">Twitter</a></li>
              <li><a href="home">Instagram</a></li>
              <li><a href="home">Discord</a></li>
              <li><a href="home">Linkedin</a></li>
            </ul>
          </div>
          <div className=''>
            <ul>
              <li><a href="home">Privacy Policy</a></li>
              <li><a href="home">Terms Of Services</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer