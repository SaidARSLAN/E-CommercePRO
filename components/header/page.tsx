"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { CiSearch } from "react-icons/ci";
import { SiBigcommerce } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import GlobalContext from '@/context/MainContext';

const Header = () => {
    
    const {toggle,getToggleControl} = useContext(GlobalContext)

    const [scrollToggle,setScrollToggle] = useState(false)

    window.addEventListener('scroll',event => {
        if (window.scrollY > 650) {
            setScrollToggle(true)
        }
        else {
            setScrollToggle(false)
        }
    })
    return (
        <header className={toggle ? styles.headerSide : scrollToggle ? styles.headerWhite : styles.header}>
            <div className={styles.logo}>
                <SiBigcommerce />
            </div>
            <div className={styles.navbar}>
                <div className={styles.search}>
                    <input type="text" placeholder='search products...' />
                    <button><CiSearch /></button>
                </div>
                <nav className={styles.links}>
                    <Link href='/login'>Login</Link>
                    <Link href='/box'>Box</Link>
                </nav>
                <div>
                    <button className={styles.seller}>Be Seller</button>
                </div>
            </div>
            <div className={styles.hamburger} onClick={() => getToggleControl()}>
                <RxHamburgerMenu />
            </div>
        </header>
    )
}

export default Header