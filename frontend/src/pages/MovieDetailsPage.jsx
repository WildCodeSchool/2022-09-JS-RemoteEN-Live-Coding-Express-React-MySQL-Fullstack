import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const backendURL = "http://localhost:5005";

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(`${backendURL}/movies/${id}`, { cancelToken: source.token })
      .then((response) => response.data)
      .then((data) => setMovie(data[0]));

    return () => {
      source.cancel("Component got unmounted");
    };
  }, []);

  console.log(movie);

  return (
    <div>
      {movie.title}
    </div>
  );
}

export default MovieDetailsPage;
