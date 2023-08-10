import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Style/Nav.css"
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

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${tmdbBaseUrl}/search/movie?api_key=${apiKey}&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

        <div className="nav-container">
        <h3>
          <Link className='link' to="/">Movies</Link>
        </h3>
        <h3>
          <Link  className='link'to="/favorites">Favorites</Link>
        </h3>
        <h3>
          <Link className='link' to="/watchlist">Watchlist</Link>
          </h3>
        </div>


        <div className='search-container'>
              <input
               className='search'
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
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
