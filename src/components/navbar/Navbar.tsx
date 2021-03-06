import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import ThemeSwitcherBtn from '../../utils/themeProvider/ThemeSwitcherBtn';

import './Navbar.css'

import logo from '../../assets/logo.png'
import logoDark from '../../assets/logoDark.png'

const Menu = () => (
  <>
    <ul>
      <li>Home</li>
      <li>Services</li>
      <li>About us</li>
      <li>Contact</li>
    </ul>
  </>
)

function Navbar() {

  const getLogo = () => {
    let theme = localStorage.getItem("theme");
    return theme==="light"? logo : logoDark
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__contain section__margin'>
        <div className='navbar__contain-links'>
          <div className='navbar-logo'>
            <img src={getLogo()} alt="lando_logo" />
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
                <li><a href="Services" onClick={() => setToggleMenu(false)}>Services</a></li>
                <li><a href="about" onClick={() => setToggleMenu(false)}>About us</a></li>
                <li><a href="contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>
              <div className="navbar__menu-container__themeSwitcher">
                <ThemeSwitcherBtn />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
