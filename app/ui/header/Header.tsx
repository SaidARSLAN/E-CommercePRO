"use client"
import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './header.css'
import GlobalContext from '@/app/context/MainContext';

const Header = () => {
  const {openSideBarFunction} = useContext(GlobalContext)
  const openSideBar = () => {
        openSideBarFunction()
  }

  return (
    <nav>
      <div className='nav-logo'>
        <h1>LOGO</h1>
      </div>
      <div className='nav-hamburger' onClick={openSideBar}>
      <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Header