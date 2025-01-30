import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"


const BookDetails =()=>{
    const [book,setBook] = useState(null);
    const [error,setError] = useState("")
    const {id} = useParams();
    

    useEffect(()=>{
        axios.get(`https://waiting-foregoing-beef.glitch.me/Books/${id}`)
        .then((res)=>{
            setBook(res.data)
        })
        .catch((error)=>{
           setError(error)
        })
    },[id])

    return(
        <div>
            <h2>{book.name}</h2>
            <h4>{book.category}</h4>
            <h4>{book.price}</h4>
            <h4>{book.author}</h4>
            <p>{book.publishingYear}</p>
            <img>{book.coverImage}</img>
            <p>{book.description}</p>

         <button onClick={()=><redirect to='/Books'/>}>Back to Books</button>
        </div>
    )
};

export default BookDetails;