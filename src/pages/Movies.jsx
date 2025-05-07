import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Movies() {
  const API_Key = '938b6e1052d51d27a20df566451ea0bb';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}`)
      .then((movieResponse) => {
        setMovies(movieResponse.data.results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Popular Movies</h2>
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-3" key={movie.id}>
            <div className="card mb-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;