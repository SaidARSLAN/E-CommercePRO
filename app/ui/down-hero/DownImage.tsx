import Image, { StaticImageData } from 'next/image'
import React from 'react'

type propsType = {
    image: {
        path : StaticImageData,
        id:number
    },
    sendChoosen : (id : number) => void
}


const DownImage = ({image,sendChoosen}:propsType) => {
    const handleDownClick = () => {
        sendChoosen(image.id)
    }
  return (
    <div onClick={handleDownClick}>
        <Image src={image.path} alt='image' width={103} height={100} className='small-image'/>
    </div>
  )
}

export default DownImage