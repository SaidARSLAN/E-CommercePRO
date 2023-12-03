"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import './detail.css'
const ProductDetails = ({product}:any) => {

  const [readControl, setReadControl] = useState(false)
  const handleReadMore = () => {
      setReadControl(!readControl) 
  }

  return (
    <div className='product'>
        <div className='product-title'>
        <Image src={product.image} width={300} height={300} alt='image' className='image-center'/>
        <h1 className='main-title'>{product.title}</h1>
        </div>
        <div className='product-description'>
            <p className={readControl ? 'read':'descript'}>{product.description}</p>
            <button className='read-more' onClick={handleReadMore}>read {readControl ? 'less' : 'more'}</button>
            <h4>{product.category}</h4>
            <div className='button-section'>
                <button className='add'>Add</button>
                <button className='buy'>{product.price} $</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails