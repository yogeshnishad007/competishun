import  { useState, useEffect } from 'react';

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
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {movies.map((movie) => (

          <>
               <p>{movie.title}</p>
          </>
           
      ))}
    </div>
  );
}

export default Home;
