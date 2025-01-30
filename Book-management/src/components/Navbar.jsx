import React from "react"
import {NavLink, Route, Routes} from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Home from "../pages/Home";
import Books from "../pages/Books";
import Login from "../pages/Login";

const Navbar = ()=>{

    return(
        <>
        <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Books">Books</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/logout">Logout</NavLink>
        </div>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <PrivateRoute path="/books" element={<Books/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
        </Routes>

        </>
    )
};

export default Navbar;