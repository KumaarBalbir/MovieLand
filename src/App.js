import React from "react"; 
import {useState, useEffect } from "react"; 
import './App.css';
import SearchIcon from './search.svg'; 
import MovieCard from "./MovieCard";

// 1acf8d26 
const API_URL='http://www.omdbapi.com/?s';


const App = ()=>{ 
  
  const [Movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const searchMovies = async(title)=>{
    const response= await fetch(`${API_URL}=${title}&apikey=1acf8d26`); 
    const data = await response.json(); 
   setMovies(data.Search);
  } 

  useEffect(()=>{ 
    searchMovies('Spiderman')

  },[]);
  return ( 
    <>
    <div className="app">
      <h1>MovieLand</h1>
    </div> 

    <div className="search">
      <input placeholder="Seach for a movie" 
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}/> 

      <img src={SearchIcon}
       alt="search" 
       onClick={()=> searchMovies(searchTerm)}/>
    </div>  
    
    {
       Movies?.length>0 ? 
       (
        <div className="container">
        {
           Movies.map((movie)=>(
            <MovieCard movie={movie} />
           ))
        }
      </div> 
       ) : 
       (
          <div className="empty">
            <h2>No movie found!!</h2>
          </div>
       )
    }


 
    </>
  );
} 

export default App;