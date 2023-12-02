"use client"
import React from 'react'
import './hero.css'
import Image from 'next/image'
import { eight, five, four, one, seven, six, three, two } from '@/assets'
import DownHero from '../down-hero/DownHero'

const titles = ['Fresh', 'Comfort', 'Luxury', 'Illuminate', 'Organize', 'Entertainment', 'Dream', 'Fashion'];

const images = [
  { 'path': one, 'id': 1, 'title': titles[0] },
  { 'path': two, 'id': 2, 'title': titles[1] },
  { 'path': three, 'id': 3, 'title': titles[2] },
  { 'path': four, 'id': 4, 'title': titles[3] },
  { 'path': five, 'id': 5, 'title': titles[4] },
  { 'path': six, 'id': 6, 'title': titles[5] },
  { 'path': seven, 'id': 7, 'title': titles[6] },
  { 'path': eight, 'id': 8, 'title': titles[7] },
];




const Hero = () => {


  const [currImg, setcurrImg] = React.useState(one)
  const [currTitle, setCurrTitle] = React.useState(images[0].title)

  const changeCurrImageFunction = (id:number) => {
    const currImage = images.find((image) => image.id === id)?.path
    const currTtl = images.find((image) => image.id === id)?.title
    currImage && setcurrImg(currImage)
    currTtl && setCurrTitle(currTtl)
  }

  return (
    <section className='hero-section'>
      <Image src={currImg} alt='kitchen' width={1920} height={1080} className='main-image'/>
      <h3 className='title'>{currTitle}</h3>
      <DownHero sendChoosen={changeCurrImageFunction}/>
    </section>
  )
}

export default Hero