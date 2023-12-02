import React from 'react'

const Products = ({product}:any) => {
    console.log(product)
  return (
    <div>{product&&product.title}</div>
  )
}

export default Products