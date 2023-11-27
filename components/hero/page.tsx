"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import HeroItem from './HeroItem'
import { heroDatas } from '@/assets'



const HeroPage =  () => {
    const data =  heroDatas
    const [step, setStep] = useState(0)

    const handleBack = () => {
        step > 0 && setStep(currStep => currStep  - 1)
    }

    const handleNext = () => {
        step < data.length - 1 && setStep(currStep => currStep + 1)
    }

  return (
    <div className={styles.main}>
        <HeroItem item={data[step]}/>
        <div className={styles.buttonsPlace}>
        <button onClick={handleBack}>BACK</button>
        <button onClick={handleNext}>NEXT</button>
        </div>
    </div>
  )
}

export default HeroPage