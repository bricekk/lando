import React from 'react'
import { Testimonial } from '../../components'

import { AiFillStar } from 'react-icons/ai'

import './Testimonials.css'

const TestiData = [
  {
    Testimonial: "This product is so cool and create so much value bla bla bla bla",
    rank: <><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /><AiFillStar size={25} /><AiFillStar size={25} /></>,
    clientName: "John Doe",
    clientCompany: "OssCameroon",
  },
  {
    Testimonial: "This product is so cool and create so much value bla bla bla bla",
    rank: <><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /></>,
    clientName: "John Doe",
    clientCompany: "OssCameroon",
  },
  {
    Testimonial: "This product is so cool and create so much value bla bla bla bla",
    rank: <><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /><AiFillStar color='blue' size={25} /><AiFillStar size={25} /></>,
    clientName: "John Doe",
    clientCompany: "OssCameroon",
  }
]

function Testimonials() {
  return (
    <div className='testimonials'>
      <div className='testimonials__header'>
        <h1>Testimonials</h1>
        <p>People love what we do and we want to let you know</p>
      </div>
      <div className='testimonials__container'>
        {TestiData.map((item) => (
          <Testimonial testimonial={item.Testimonial} rank={item.rank} clientName={item.clientName} clientCompany={item.clientCompany} />
        ))}

      </div>
    </div>
  )
}

export default Testimonials