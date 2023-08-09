
import { useEffect, useState } from 'react';

const GenreNameFinder = ({ genreIds}) => {

  const [genreMapping, setGenreMapping] = useState({});

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const apiKey = "c5a2b9797c94ce965b31f43c8078586b";
        const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

        const response = await fetch(genreUrl);
        const data = await response.json();

        const mapping = {};

        data.genres.forEach(el => {
          mapping[el.id] = el.name;
        });
        
        console.log("map",mapping)

        setGenreMapping(mapping);

      } catch (error) {
        console.error("Error fetching genre list:", error);
      }
    };

    fetchGenre();
  }, []);

  const genreNames = genreIds.map(ele =>
    genreMapping[ele] ? genreMapping[ele] : `Genre ID: ${ele} - Genre not found`
  );

  return (
    <div>

      <p>{genreNames.join(', ')}</p>
    </div>
  );
};

export default GenreNameFinder;
