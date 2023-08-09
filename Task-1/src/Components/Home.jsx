import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Style/Nav.css"
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
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

    <div className='card-container'>
                 
      {movies.map((ele) => (

        <>
            <div key={ele.id} className="card-item">
                
                <img src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`}alt={ele.poster_path} />
                <p>{ele.title}</p>
                  <p>{ele.genre_ids.join(', ')}</p>
            </div>
            
        </>
 
     ))}

 </div>
      
    </div>
  );
}

export default Home;
