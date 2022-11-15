import { Link, Route, Routes } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import AppStyles from "./App.module.css";

function App() {
  return (
    <div>
      <nav className={AppStyles.nav}>
        <ul>
          <li>
            <Link to="/">All Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/:id" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
