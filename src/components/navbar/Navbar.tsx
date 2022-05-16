import React from 'react'

function navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__contain'>
        <div className='navbar-logo'></div>
        <div className='navbar__contain-links'>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='navbar__connexion'>
          <input type="button" />
        </div>
      </div>
    </div>
  )
}

export default navbar