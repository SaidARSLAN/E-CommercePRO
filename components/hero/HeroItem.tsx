import React, { useContext } from 'react'
import styles from './styles.module.css'
import {motion,AnimatePresence} from 'framer-motion'

const slideVariants = {
  hiddenRight: {
    x: "100%",
    transition : {
      type:'tween'
    }
  },
  hiddenLeft: {
    x: "-100%",
    transition : {
      type:'tween'
    }
  },
  visible: {
    x: "0",
  },
    exitRight : {
      x:"100%",
      transition : {
        type:'tween'
      }
    },
    exitLeft : {
      x:"-100%",
      transition : {
        type:'tween'
      }
    },
};

const HeroItem = ({item,step,direction}:any) => {


  return (
    <AnimatePresence>
    <motion.div
    key={step}
    variants={slideVariants}
    initial={direction === 'left' ? 'hiddenRight':'hiddenLeft'}
    animate='visible'
    exit={direction === 'left' ? 'exitRight' : 'exitLeft'}
    className={styles.item}>
        <img src={item.photo.src} className={styles.image}/>
        <div className={styles.name}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        </div>
    </motion.div>
      </AnimatePresence>
  )
}

export default HeroItem