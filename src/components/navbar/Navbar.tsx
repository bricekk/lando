import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import './Navbar.css'
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <ul>
      <li>Home</li>
      <li>Pricing</li>
      <li>About us</li>
      <li>Contact</li>
    </ul>
  </>
)

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__contain section__margin'>
        <div className='navbar__contain-links'>
          <div className='navbar-logo'>
            <img src={logo} alt="lando_logo" />
          </div>
          <Menu />
        </div>
        <div className='navbar__connexion'>
          <button id='login'>Log in</button>
          <button id='signup'>Sign Up</button>
        </div>
        <div className='navbar__menu'>
          {toggleMenu
            ? <RiCloseLine className='closeLine' color="var(--text-color-light)" size={40} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line className='MenuLine' color="var(--text-color)" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu &&
            <div className='navbar__menu-container slide-left'>
              <ul>
                <li><a href="home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="pricing" onClick={() => setToggleMenu(false)}>Pricing</a></li>
                <li><a href="about" onClick={() => setToggleMenu(false)}>About us</a></li>
                <li><a href="contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar