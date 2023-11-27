import React from 'react'
import styles from './styles.module.css'

const HeroItem = ({item}:any) => {
    console.log(item)
  return (
    <div className={styles.item}>
        <img src={item.photo.src} className={styles.image}/>
        <div className={styles.name}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        </div>
    </div>
  )
}

export default HeroItem