import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const API_KEY = "938b6e1052d51d27a20df566451ea0bb";
  
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then(res => setMovie(res.data))
        .catch(err => console.error(err));
    }, [id]);
  
    if (!movie) return <p>Loading...</p>;
  
    return (
      <div className="container mt-4">
        <h2>{movie.title}</h2>
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} 
          alt={movie.title}
          className="img-fluid mb-3"
        />
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Rating:</strong> {movie.vote_average}/10</p>
      </div>
    );
}

export default MovieDetails