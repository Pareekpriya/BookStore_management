import React, { useEffect, useState } from "react";
import axios from "axios"
import {Link} from "react-router-dom"


const Books =()=>{
    const [Books,setBooks] = useState([]);
    const [error,setError] = useState("")

    useEffect(()=>{
        axios.get("https://waiting-foregoing-beef.glitch.me/Books")
        .then((res)=>{
          setBooks(res.data)
        })
        .catch((error)=>{
          setError("error in fetching data:",error)
        })
    },[])

    return(
        <div>
            <h2>Books List</h2>
        </div>
        {Books.map((book)=>(
            <h3>{book.name}</h3>
            <p>{book.description}</p>
            <Link to={`/Books/${book.id}`}>View Book</Link>
        ))}
    )
}

export default Books;