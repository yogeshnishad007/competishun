import  { useState, useEffect } from 'react';
import "../Style/Nav.css"
import NavBar from "./NavBar"
import GenreNameFinder from './GenreNameFinder';
const apiKey = 'c5a2b9797c94ce965b31f43c8078586b';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

const Home =()=> {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log("movie",movies)

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${tmdbBaseUrl}/movie/popular?api_key=${apiKey}`);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
     const newQuery = e.target.value.trim(); 
     setQuery(e.target.value.trim())

     if(newQuery ===""){
      try {
        const response = await fetch(`${tmdbBaseUrl}/movie/popular?api_key=${apiKey}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
     } 
     else
     {

      try {
        const response = await fetch(
          `${tmdbBaseUrl}/search/movie?api_key=${apiKey}&query=${newQuery}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }

     }
      
  
   
  };

  return (
    <div>

        <NavBar/>


        <div className='search-container'>
              <input
               className='search'
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={handleSearch}
              required
            />
           
        </div>
      

    <div className='card-container'>
                 
      {movies.map((ele) => (

        <>
                
            <div key={ele.id} className="card-item" >
                  
               <p>{ele.title}</p>
                
               <Link key={ele.id} to={`/movie/${ele.id}`} className="card-item">
                <img id='animated ' src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`}alt={ele.poster_path} />
                </Link>
                
                  <p><GenreNameFinder genreIds={ele.genre_ids}/> </p>

                
            </div>
          
            
        </>
 
     ))}

 </div>
      
    </div>
  );
}

export default Home;
