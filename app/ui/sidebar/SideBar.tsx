"use client"
import React, { useContext } from 'react'
import './sidebar.css'
import GlobalContext from '@/app/context/MainContext'

const SideBar = () => {
    const {controlSideBar,openSideBarFunction} = useContext(GlobalContext)

    const closeSideBar = () => {
        openSideBarFunction()
    }

    return (
        <nav className={controlSideBar ?  "sidebar open" : "sidebar close"} onClick={closeSideBar}>
            SIDEBAR
        </nav>
    )
}

export default SideBar