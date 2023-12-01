"use client"
import { createContext, useState } from "react";

interface contextProps {
    controlSideBar: boolean,
    openSideBarFunction: () => void
}

const GlobalContext = createContext<contextProps>(
    {
        controlSideBar: false,
        openSideBarFunction: function (): void {
            throw new Error("Function not implemented.");
        }
    }
)


export const Provider = ({ children }: {
    children: React.ReactNode
}) => {
    const [controlSideBar, setcontrolSideBar] = useState(false)
    const openSideBarFunction = () => {
        setcontrolSideBar(!controlSideBar)
    }

    return <GlobalContext.Provider value={{controlSideBar, openSideBarFunction}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext