import { createContext , useContext, useState } from "react";

export const globalContext = createContext();


export const GlobalProvider = ({children})=>{
const [username , setUsername] = useState("suraj");
const [greet , setGreet]  = useState("Good Morning")

    return (
        <globalContext.Provider value={{username , setUsername , greet , setGreet}}>
            {children}
        </globalContext.Provider>
    )
}


