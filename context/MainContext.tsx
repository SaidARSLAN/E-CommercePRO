"use client"
import React, { createContext, useState } from 'react'

type contextProps = {
    getToggleControl: () => void,
    toggle : boolean
}


const GlobalContext = createContext<contextProps>({
    getToggleControl: () => {},
    toggle:false
})

type childrenProps = {

    children: React.ReactNode

}

export const Provider: React.FC<childrenProps> = ({ children }) => {
    const [toggle, setToggle] = useState(false)

    const getToggleControl = () => {
        setToggle(!toggle)
    }

    return (
        <GlobalContext.Provider value={{ getToggleControl,toggle }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext