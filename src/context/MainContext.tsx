
import { createContext,useEffect,useState } from "react"



  

interface Hotel {

    name:string

}
interface GlobalContextProps {

    hotels : Hotel[]

    getHotelsFromAPI : () => Promise<void>

}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)


interface ProviderProps {

    children : ReactNode

}

export const Provider:React.FC<ProviderProps> = ({children}) => {

    const [query, setQuery] = useState("")

    const getHotelsFromAPI = async () => {
        const url = 'https://worldwide-hotels.p.rapidapi.com/typeahead';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '4a249adc9amshf077473637e726cp1e5b9ejsnfc90ecea6fd6',
		'X-RapidAPI-Host': 'worldwide-hotels.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: query,
		language: 'en_US'
	})
};
        try {
            const response = await fetch(url,options)
            const result = await  response.text()
            console.log(JSON.parse(result))
        }
        catch (error) {
            console.log(error)

        }

    }
    
    const sendData = (data) => {

        setQuery(data)
        query && getHotelsFromAPI(query)


    }

    return (
        <GlobalContext.Provider value={{sendData}}>
        {children}
    </GlobalContext.Provider>
        )
}

export default GlobalContext