const database = require("../database");

const getAllMovies = (req, res) => {
  database
    .query("SELECT * FROM movies")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

const getMovieByID = (req, res) => {
  const movieID = req.params.id;
  database
    .query("SELECT * FROM movies WHERE id = ?", [movieID])
    .then((result) => {
      if (result[0].length === 0) {
        res.status(404).send("This movie is not in the list.");
      } else {
        res.status(200).json(result[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

const createMovie = (req, res) => {
  const { title, genre, year, rate } = req.body;
  database
    .query(
      "INSERT INTO movies (title, genre, year, rate) VALUES (?, ?, ?, ?)",
      [title, genre, year, rate]
    )
    .then((result) => {
      if (result[0].affectedRows === 0) {
        res.status(400).send("Movie could not be created.");
      } else {
        const newMovieID = result[0].insertId;
        res.status(201).json({
          id: newMovieID,
          title,
          genre,
          year,
          rate,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  getAllMovies,
  getMovieByID,
  createMovie,
};
