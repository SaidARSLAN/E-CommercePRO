import SideBar from '@/components/sidebar/page'
import React from 'react'
import styles from './styles.module.css'
import HeroPage from '@/components/hero/page'
const HomeContainer = () => {
  return (
    <div className={styles.home}>
        <HeroPage />
        <div className={styles.pageOne}>PAGE 1</div>
        <div className={styles.pageTwo}>PAGE 2</div>
        <div className={styles.pageThree}>PAGE 3</div>
    </div>
  )
}

export default HomeContainer