import React from 'react'

import './Feature.css'

type FeatureProps = {
  supTitle: string;
  title: string;
  text:string;
  img:string;
};

const Feature = ({ supTitle, title, text, img }: FeatureProps) => {
  return (
    <div className='feature'>
      <div className='feature__container'>
        <div className='feature__container-img'>
          <img src={img} alt=""/>
        </div>
        <div className='feature__container-text'>
          <p className='text_to_blur'>{supTitle}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Feature