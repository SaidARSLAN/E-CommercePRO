import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import { CiSearch } from "react-icons/ci";
import { SiBigcommerce } from "react-icons/si";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
            <SiBigcommerce />
            </div>
            <div className={styles.navbar}>
            <div className={styles.search}>
                <input type="text" placeholder='search products...'/>
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
        </header>
    )
}

export default Header