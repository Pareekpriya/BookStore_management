import React, { useContext, useState } from "react";
import { BrowserRouter, Link, NavLink, redirect, Route, Routes } from 'react-router-dom'


const Login = ()=>{
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const handleLogin = (event) =>{
        event.preventdefault();

        axios.post(`https://waiting-foregoing-beef.glitch.me/${login}`,{
            userName,
            password
        })
        .then((res)=>{
            localStorage.setItem("authToken",res.data.token);
            <redirect to='/Books'/>
        })
        .catch((error)=>{
            setError("Error fetching the data:",error)
        })
    }

    return(
       <div>
        <h2>Login</h2>
        {error && <p>{error}</p>}

        <form onSubmit={handleLogin}>
         <input
          type="text"
          placeholder="Enter your Name"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
         />

         <input
           type="password"
           placeholder="Enter your password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
         />

         <button type="submit">Login</button>
        </form>
       </div>
    )
};

export default Login;
