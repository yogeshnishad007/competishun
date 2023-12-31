import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "../Style/MovieDetails.css";

const apiKey = "c5a2b9797c94ce965b31f43c8078586b";
const tmdbBaseUrl = "https://api.themoviedb.org/3";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `${tmdbBaseUrl}/movie/${id}?api_key=${apiKey}`
      );
      const data = await response.json();
      setMovie(data);
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWatchlist = () => {
    console.log("Added to Watchlist:", movie.title);
  };

  const handleFavorites =()=>{
    
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  const genreNames = movie.genres.map((el) => el.name).join(", ");

  return (
    <div>
      <NavBar />

      <div className="card-box">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <p>{genreNames}</p>

        <div>
          <button onClick={handleWatchlist}>Add to Watchlist</button>
          <button onClick={handleFavorites}>Add to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
