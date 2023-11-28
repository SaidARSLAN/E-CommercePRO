"use client"
import React, { useContext, useState } from 'react'

import styles from './styles.module.css'
import GlobalContext from '@/context/MainContext'
import { useRouter } from 'next/navigation'



const LoginPage = () => {

  const {completeLogin} = useContext(GlobalContext)
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loadingControl, setLoadingControl] = useState(false)


  const handleClickLogin = (event:any) => {
    event.preventDefault()
    setLoadingControl(true)
    const result = completeLogin(username,password)
    if (result) {
      setTimeout(() => {
        console.log(loadingControl)
        router.push('/')
      },3000)
    }
  }

  return (
    <div className={styles.login}>
      {
        loadingControl ? <form className={styles.form}><div className={styles.loader}></div></form> :
        <form className={styles.form}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)} />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <button onClick={handleClickLogin}>Login</button>
      </form>
        }
    </div>
  )
}

export default LoginPage