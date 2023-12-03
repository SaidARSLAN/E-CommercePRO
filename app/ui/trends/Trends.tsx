"use client"
import React, { useEffect, useState } from 'react'
import './trends.css'
import Products from './Products'
import Link from 'next/link'

const fetchData = async () => {
  const req = await fetch('https://fakestoreapi.com/products')
  const products = await req.json()
  return products
}

const Trends = () => {
  const [currPage, setCurrPage] = useState(0)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const pageNumbers: number[] = []

  useEffect(() => {
    setLoading(true)
    fetchData()
      .then((data) => setProducts(data))
    setLoading(false)
  }, [])
  const totalPage = Math.round(products.length / 6)
  for (let i = 0; i < totalPage; i++) {
    pageNumbers.push(i + 1)
  }

  const handlePageChange = (number: number) => {
    if (number === 1) {
      setCurrPage(0)
    }
    else if (number === 2) {
      setCurrPage(6)
    }
    else {
      setCurrPage(12)
    }
  }
  return (
    <div className='trends-page'>
        :
        <div className='trends'>
          {
            products.slice(currPage, currPage + 6).map((product: any, idx: number) => {

              return <Link key={idx} className='product-link' href={`/product-detail/${idx + 1}`}><Products product={product} /></Link>

            })}


        </div>
      <div className='pagination'>
        {pageNumbers.map((number) => {
          return (
            <button onClick={() => handlePageChange(number)}>{number}</button>
          )
        })}
      </div>
    </div>
  )

}

export default Trends