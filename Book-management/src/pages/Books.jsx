import React, { useEffect, useState } from "react";
import axios from "axios"
import {Link} from "react-router-dom"


const Books =()=>{
    const [Books,setBooks] = useState([]);
    const [error,setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const limit = 5

 function fetchBook (page){
    axios.get(`https://waiting-foregoing-beef.glitch.me/Books?_limit=${limit}&_page=${page}`)
    .then((res)=>{
      setBooks(res.data)
      setHasMore(res.data.length>0)
    })
    .catch((error)=>{
      setError("error in fetching data:",error)
    })
   
}

  useEffect(()=>{
     fetchBook(currentPage)
 },[currentPage])
   
    const handleNext = ()=>{
        if(hasMore){
            setCurrentPage((PrePage)=>PrePage+1);
        }
    } 
    
    const handlePrevious = ()=>{
        if(currentPage>1){
            setCurrentPage((PrePage)=>PrePage-1)
        }
    }

    return(
        <div>
            <h2>Books List</h2>

            {Books.map((book)=>(
            <h3>{book.name}</h3>
            <p>{book.description}</p>
            <Link to={`/Books/${book.id}`}>View Book</Link>
        ))}
        </div>

        <div>
            <button onClick={handlePrevious}
            disabled = {currentPage===1}
            >Previous</button>

            <button onClick={handleNext}
             disabled = {!hasMore}
            >Next</button>
        </div>
    )
             
}

export default Books;