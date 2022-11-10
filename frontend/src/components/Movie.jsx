import React from "react";

const Movie = ({ movie }) => {
  const { title, genre, year, rate } = movie;
  return <div>{title}</div>;
};

export default Movie;
