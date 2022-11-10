import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const backendURL = "http://localhost:5005";

  useEffect(() => {
    axios
      .get(`${backendURL}/movies`)
      .then((response) => response.data)
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
