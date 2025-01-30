import React, { Component } from "react"
import { redirect, Route } from "react-router-dom"

const PrivateRoute = ({Component: Component , ...rest})=>{
    const isAuthenticated = localStorage.getItem('authToken');

    return(
        <Route
         {...rest}
         render = {(props)=>
            isAuthenticated?<Component{...props}/>:<redirect to ="/login"/>
         }
        />
    )
};

export default PrivateRoute;