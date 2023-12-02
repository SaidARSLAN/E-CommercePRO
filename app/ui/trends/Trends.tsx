
import React from 'react'
import './trends.css'
import Products from './Products'


const Trends = async  () => {
 const req =  await fetch('https://fakestoreapi.com/products')
  const products = await req.json()

  return (
    <div>
      {products.map((product:any) => {
        
        return <Products product={product}/>
      })}
    </div>
  )
  
}

export default Trends