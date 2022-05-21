import React from 'react'

import './Testimonial.css'

type testiProps = {
  testimonial: string;
  rank: string  | JSX.Element;
  clientName: string;
  clientCompany: string;
}

function Testimonial({testimonial,rank,clientName,clientCompany}:testiProps) {
  return (
    <div className='testimonial'>
      <div className='testimonial__container'>
        <h4>"{testimonial}"</h4>
        <p>{rank}</p>
        <h5>{clientName}</h5>
        <p>{clientCompany}</p>
      </div>
    </div>
  )
}

export default Testimonial