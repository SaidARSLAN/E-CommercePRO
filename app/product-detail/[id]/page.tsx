import Products from '@/app/ui/trends/Products'
import React from 'react'
import './productsdetail.css'
import ProductDetails from '@/app/ui/productsdetails/ProductDetails'

const page = async ({params}:{
  params: {
    id:number
  }
}) => {

  const req =  await fetch('https://fakestoreapi.com/products')
  const products = await req.json()
  const currProducts = await products.find((product:any) => product.id == params.id)
  return (
    <div className='products-detail'>
      <ProductDetails product={currProducts}/>
    </div>
  )
}

export default page