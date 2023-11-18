import React, { useRef } from 'react'

const CreateOwn = () => {


  const handleClick = (event:React.MouseEvent<HTMLElement>) => {

    const btns = document.getElementsByClassName("btn")
    for (let i of btns) {
      if (i === event.target) {
          i.classList.add("active")
      }
      else {
        i.classList.remove("active")

      }
    }

  }

  return (
    <div className='create-own'>
        <div className='title-buttons'>
            <button className='btn' onClick={handleClick}>Accomodations</button>
            <button className='btn' onClick={handleClick}>Hotel</button>
            <button className='btn' onClick={handleClick}>Home/Suit</button>
        </div>
    </div>
  )
}

export default CreateOwn