
import React from 'react'
import './trends.css'
import Products from './Products'
import Link from 'next/link'


const Trends = async  () => {
 const req =  await fetch('https://fakestoreapi.com/products')
  const products = await req.json()

  return (
    <div className='trends'>
      {products.map((product:any,idx:number) => {
        
        return <Link className='product-link' href={`/product-detail/${idx+1}`}><Products product={product}/></Link>
      })}
    </div>
  )
  
}

export default Trends