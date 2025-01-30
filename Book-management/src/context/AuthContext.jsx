import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const ContextProvider = ({children})=>{
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");


    const handleAuthContext = (event) =>{
        event.preventdefault();

        axios.post(`https://waiting-foregoing-beef.glitch.me/${login}`,{
            userName:"admin",
            password:"password123"
        })
    };

    return(
        <AuthContext.Provider value={{userName,password}}>
            {children}
        </AuthContext.Provider>
    )
};

export default ContextProvider;