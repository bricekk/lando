import React from 'react'

import brandImg from '../../assets/brand.png'
import './Brand.css'

function Brand() {
  return (
    <div className='brand'>
      <h4>Trusted by individuals and teams at the world's best companies.</h4>
      <div className='brand__container'>
          <div className='brand__container-brand-img'>
            <img src={brandImg} alt="" />
          </div>
          <div className='brand__container-brand-img'>
            <img src={brandImg} alt="" />
          </div>
          <div className='brand__container-brand-img'>
            <img src={brandImg} alt="" />
          </div>
          <div className='brand__container-brand-img'>
            <img src={brandImg} alt="" />
          </div>
          <div className='brand__container-brand-img'>
            <img src={brandImg} alt="" />
          </div>
          <div className='brand__container-brand-img'>
            <img src={brandImg} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Brand