import React from "react";
import { useState } from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        console.log(movie);
        return <Movie key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default MovieList;
