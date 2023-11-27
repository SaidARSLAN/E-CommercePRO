import React from 'react'

const HeroItem = ({item}:any) => {
    console.log(item)
  return (
    <div>
        <img src={item.photo.src} style={{width:'100px',height:'100px'}}/>
        <h1>{item.name}</h1>
    </div>
  )
}

export default HeroItem