import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  // TODO: Display movies in table and filter by e.g. genre
  return (
    <ul>
      {movies.map((movie) => {
        console.log(movie);
        return (
          <li>
            <Link to={`/${movie.id}`} key={movie.id}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
