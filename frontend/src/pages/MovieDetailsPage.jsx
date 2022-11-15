import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(undefined);

  const { id } = useParams();

  const navigate = useNavigate();

  const uri = `http://localhost:5005/movies/${id}`;

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(uri, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setMovie(data[0]));

    return () => {
      source.cancel("Component got unmounted");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(uri, movie)
      .then((response) => response.data)
      .then((data) => console.log(data));
  };

  const handleDelete = () => {
    axios
      .delete(uri)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  return (
    <div className={styles.movieContainer}>
      {movie != null && (
        <>
          <form onSubmit={handleSubmit}>
            <input
              value={movie.title}
              onChange={(e) =>
                setMovie({ ...movie, ...{ title: e.target.value } })
              }
              type="text"
            />
            <input
              value={movie.genre}
              onChange={(e) =>
                setMovie({ ...movie, ...{ genre: e.target.value } })
              }
              type="text"
            />
            <input
              value={movie.year}
              onChange={(e) =>
                setMovie({ ...movie, ...{ year: e.target.value } })
              }
              type="text"
            />
            <input
              value={movie.rate}
              onChange={(e) =>
                setMovie({ ...movie, ...{ rate: e.target.value } })
              }
              type="text"
            />
            <button type="submit">Save changes</button>
          </form>
          <button onClick={handleDelete}>Delete movie</button>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
