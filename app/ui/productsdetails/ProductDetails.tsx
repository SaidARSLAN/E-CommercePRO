import Image from 'next/image'
import React from 'react'
import './detail.css'
const ProductDetails = ({product}:any) => {
  return (
    <div className='product'>
        <div className='product-title'>
        <Image src={product.image} width={300} height={300} alt='image'/>
        <h1>{product.title}</h1>
        </div>
        <div className='product-description'>
            <p className='descript'>{product.description}</p>
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