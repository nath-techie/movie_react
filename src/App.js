import {useState,useEffect} from 'react';
import React from 'react';
import './App.css';
import MovieCard from './MovieCard';
import li from './li.png';
import ig from './insta2.png';

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=a3a67427';
 

const App = () =>{
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async(title)=>{
const response= await fetch(`${API_URL}&s=${title}`);
const data=await response.json();
setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('');
  },[]);
 


  
  return(
<div className="App">

  <div className="title">
    <span style={{'fontSize': '3rem'}}>🎬</span>
    <h1>Cinephile</h1>
    <span style={{'fontSize': '3rem'}}>🍿</span>
  </div>

  <div className="search">
    <input 
    placeholder='Search movies'
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    />
    <svg onClick={()=>{searchMovies(searchTerm)}} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" cursor="pointer" >
    <path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>


  {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

<div className="follow-me">
      Follow me on:
       
      <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
        <img src={li} />
      </a>
         
  
      <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
      <img src={ig} />
      </a>
     
   
      
    </div>
  
  
  </div>

  );

}

export default App;


//api key :a3a67427
//http://www.omdbapi.com/?i=tt3896198&apikey=a3a67427
