"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import HeroItem from './HeroItem'
import { heroDatas } from '@/assets'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";


const HeroPage =  () => {
    const data =  heroDatas
    const [step, setStep] = useState(0)
    const [direction, setDirection] = useState('left'); 
    const handleBack = () => {
      setDirection('right')
        step > 0 && setStep(currStep => currStep  - 1)
    }

    const handleNext = () => {
      setDirection('left')
        step < data.length - 1 && setStep(currStep => currStep + 1)
    }

    

  return (
    <div className={styles.main}>
        <HeroItem item={data[step]} step={step} direction={direction}/>
        <div className={styles.buttonsPlace}>
        <button onClick={handleBack}><MdNavigateBefore /></button>
        <button onClick={handleNext}><MdNavigateNext /></button>
        </div>
    </div>
  )
}

export default HeroPage