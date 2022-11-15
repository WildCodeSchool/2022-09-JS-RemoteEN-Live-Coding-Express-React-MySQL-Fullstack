import { Link, Route, Routes } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AppStyles from "./App.module.css";
import NewMoviePage from "./pages/NewMoviePage";

function App() {
  return (
    <div>
      <nav className={AppStyles.nav}>
        <ul>
          <li>
            <Link to="/">All Movies</Link>
          </li>
          <li>
            <Link to="/create">Create Movie</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/:id" element={<MovieDetailsPage />} />
        <Route path="/create" element={<NewMoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
