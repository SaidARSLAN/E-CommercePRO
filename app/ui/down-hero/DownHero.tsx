import React from 'react'
import './downhero.css'
import { eight, five, four, one, seven, six, three, two } from '@/assets'
import DownImage from './DownImage'

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


const DownHero = ({sendChoosen}:{
    sendChoosen : (id:number) => void
}) => {


  return (
    <div className='downhero'>
        {images.map((image) => {
            return (
                <DownImage image={image} sendChoosen={sendChoosen}/>
            )
        })}
    </div>
  )
}

export default DownHero