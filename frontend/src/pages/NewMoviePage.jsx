import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewMoviePage.module.css";

const NewMoviePage = () => {
  const [title, setTitle] = useState();
  const [genre, setGenre] = useState();
  const [year, setYear] = useState();
  const [rate, setRate] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5005/movies", {
        title,
        genre,
        year,
        rate,
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  return (
    <div className={styles.movieContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label htmlFor="rate">Rating:</label>
        <input
          type="text"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <button type="submit">Create movie</button>
      </form>
    </div>
  );
};

export default NewMoviePage;
