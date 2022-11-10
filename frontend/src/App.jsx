import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Deadpool",
      genre: "action",
      year: 1234,
      rate: 4.8,
    },
  ]);
  // get movies here

  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
