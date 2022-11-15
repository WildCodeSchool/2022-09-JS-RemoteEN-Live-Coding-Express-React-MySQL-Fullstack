import React from 'react';
import MovieList from '../components/MovieList';
import { useState, useEffect } from "react";
import axios from "axios";

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);

  const backendURL = "http://localhost:5005";

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`${backendURL}/movies`, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setMovies(data));

    return () => {
      source.cancel("Component got unmounted");
    };
  }, []);

  return (
    <MovieList movies={movies} />
  );
}

export default MovieListPage;
