import Image from 'next/image'
import React from 'react'
import './trends.css'

const cutProductTitle = (title:string) => {
    return title.split(" ").slice(0,2).join(" ");
}

const Products = ({product}:any) => {
    console.log(product)
  return (
    <div className='product'>
        <Image src={product && product.image} alt='image' width={200} height={200}/>
        <h3>{product&&cutProductTitle(product.title)}</h3>
        <p><strong>{product && product.price} $</strong></p>
    </div>
  )
}

export default Products