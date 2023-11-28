"use client"
import React, { createContext, useEffect, useState } from 'react'

const userAdmin = {
    username : "admin",
    password : "password"
}
export type loginType = {
    username : "string",
    password : "string"
}
type contextProps = {
    getToggleControl: () => void,
    toggle : boolean,
    completeLogin : (username:string,password:string) => boolean,
    loginControl : boolean
}


const GlobalContext = createContext<contextProps>({
    getToggleControl: () => {},
    toggle:false,
    completeLogin : (data) => false,
    loginControl : false
})

type childrenProps = {

    children: React.ReactNode

}

export const Provider: React.FC<childrenProps> = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [loginControl, setLoginControl] = useState(false)

    useEffect(() => {
        const localInfo = localStorage.getItem("username")
        if (localInfo) {
            setLoginControl(true)
        }
    },[])

    const getToggleControl = () => {
        setToggle(!toggle)
    }
    const completeLogin = (username:string,password:string) => {
        if (username === userAdmin.username && password === userAdmin.password) {
            localStorage.setItem("username",username)
            localStorage.setItem("password",password)
            setLoginControl(true)
            return true
        }
        return false
    }
    return (
        <GlobalContext.Provider value={{ getToggleControl,toggle,completeLogin,loginControl }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext