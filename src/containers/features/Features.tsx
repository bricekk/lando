import React from 'react'

import { Feature } from '../../components'

import studentImg from '../../assets/student.png'
import dollarImg from '../../assets/dollar.png'
import womanImg from '../../assets/woman.png'

function Features() {


  const featuresData = [
    {
      title: 'Certified professionals',
      text: 'The teams have all passed a demanding certification process. Depending on the support you need, we select the right profiles to form your ideal team.',
      img: `${studentImg}`
    },
    {
      title: 'Fair pricing',
      text: 'We offer competitive pricing – thanks to the reasonable rates of our certified professionals and the relocation of resources. Stick to your budget without sacrificing quality.',
      img: `${dollarImg}`,
    },
    {
      title: 'Transparency',
      text: 'We allow direct communication with your assigned team right from the start. Discuss your project details without any worries, your idea is safe with us.',
      img: `${womanImg}`,
    },
    {
      title: 'Speed',
      text: '',
      img: `${womanImg}`,
    },
  ];

  return (
    <>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} img={item.img}/>
      ))}
    </>
  )
}

export default Features