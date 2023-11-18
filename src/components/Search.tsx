import React, { ChangeEvent } from 'react'
import GlobalContext from '../context/MainContext'

const Search = () => {

    const {sendData} = React.useContext(GlobalContext)

    const [query, setQuery] = React.useState<string>("")

    const handleChange = (event:ChangeEvent<HTMLInputElement | undefined>) => {

            setQuery(event.target.value)

    }

    const handleClick = (event:React.MouseEventHandler<HTMLButtonElement> | undefined) => {

        event.preventDefault()
        sendData(query)
    }

  return (
   <form>
        <input type="text" value={query} onChange={handleChange}/>
        <button onClick={handleClick}>Search</button>
   </form>
  )
}

export default Search