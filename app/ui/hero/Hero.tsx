"use client"
import React from 'react'
import './hero.css'
import Image from 'next/image'
import { eight, five, four, one, seven, six, three, two } from '@/assets'
import DownHero from '../down-hero/DownHero'

const images =  [
  {'path':one,'id':1},
  {'path':two,'id':2},
  {'path':three,'id':3},
  {'path':four,'id':4},
  {'path':five,'id':5},
  {'path':six,'id':6},
  {'path':seven,'id':7},
  {'path':eight,'id':8},
]


const Hero = () => {


  const [currImg, setcurrImg] = React.useState(one)

  const changeCurrImageFunction = (id:number) => {
    const currImage = images.find((image) => image.id === id)?.path
    currImage && setcurrImg(currImage)
  }

  return (
    <section className='hero-section'>
      <Image src={currImg} alt='kitchen' width={1920} height={1080} className='main-image'/>
      <DownHero sendChoosen={changeCurrImageFunction}/>
    </section>
  )
}

export default Hero