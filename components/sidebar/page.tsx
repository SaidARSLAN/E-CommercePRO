"use client"
import React,{useContext} from 'react'
import style from './styles.module.css'
import GlobalContext from '@/context/MainContext'
import { CiSearch } from "react-icons/ci";
import { SiBigcommerce } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link'; 



const SideBar = () => {
    const {loginControl,toggle,getToggleControl} = useContext(GlobalContext)
    const handleClose = () => {

        getToggleControl()

    }
  return (
    <div   className={toggle ? style.open : style.close}>
        <div className={style.header}>
                <SiBigcommerce className={style.logo}/>
                <IoMdClose onClick={handleClose} className={toggle ? style.closeicon : style.closed}/>
          </div>
        <div className={style.input}>
            <input type="text"/>
            <button><CiSearch /></button>
        </div>
        <nav className={style.links}>
                    {loginControl ? <Link href='/'>Logout</Link> : <Link href='/login'>Login</Link>}
                    <Link href='/box'>Box</Link>
        </nav>
        <div>
                    <button className={style.seller}>Be Seller</button>
          </div>
    </div>
  )
}

export default SideBar