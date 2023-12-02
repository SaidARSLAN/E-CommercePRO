"use client"
import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import './header.css'
import GlobalContext from '@/app/context/MainContext';
import Link from 'next/link';

const Header = () => {
  const {openSideBarFunction} = useContext(GlobalContext)
  const openSideBar = () => {
        openSideBarFunction()
  }

  return (
    <nav>
      <div className='nav-logo'>
        <Link href='/'><h1>LOGO</h1></Link>
      </div>
      <div className='nav-hamburger' onClick={openSideBar}>
      <GiHamburgerMenu />
      </div>
      <ul className='nav-list'>
        <li><Link href='login'>Login</Link></li>
        <li><Link href='login'>Box</Link></li>
      </ul>
    </nav>
  )
}

export default Header