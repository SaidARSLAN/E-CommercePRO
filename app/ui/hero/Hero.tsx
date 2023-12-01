import React from 'react'
import './hero.css'
import Image from 'next/image'
import kitchen from '../../../assets/kitchen.jpg'
const Hero = () => {
  return (
    <section className='hero-section'>
        <Image src={kitchen}  alt='kitchen' width={1920} height={1080}/>
    </section>
  )
}

export default Hero