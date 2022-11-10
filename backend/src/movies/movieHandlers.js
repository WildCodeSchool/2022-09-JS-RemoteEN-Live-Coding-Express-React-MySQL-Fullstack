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
        res.location(result[0].insertId).sendStatus(201);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

const putMovie = (req, res) => {
  const movieID = req.params.id;
  const { title, genre, year, rate } = req.body;

  database
    .query(
      "UPDATE movies SET title = ?, genre = ?, year = ?, rate = ? WHERE id = ?",
      [title, genre, year, rate, movieID]
    )
    .then((result) => {
      if (result[0].affectedRows === 0) {
        res.status(400).send("Movie could not be updated.");
      } else {
        res.sendStatus(202);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

const patchMovie = (req, res) => {
  const movieID = req.params.id;
  if (movieID == null) {
    res.status(400).send("Please provide a valid movie ID.");
    return;
  }

  const affectedFields = [];
  const values = [];

  if (req.body.title != null) {
    affectedFields.push("title");
    values.push(req.body.title);
  }

  if (req.body.genre != null) {
    affectedFields.push("genre");
    values.push(req.body.genre);
  }

  if (req.body.year != null) {
    affectedFields.push("year");
    values.push(req.body.year);
  }

  if (req.body.rate != null) {
    affectedFields.push("rate");
    values.push(req.body.rate);
  }

  if (affectedFields.length === 0) {
    res.status(400).send("Please provide fields to update.");
    return;
  }

  const sql = `UPDATE movies SET ${affectedFields
    .map((field) => `${field} = ?`)
    .join(", ")} WHERE id = ?`;

  console.log(sql);

  database
    .query(sql, [...values, movieID])
    .then((result) => {
      if (result[0].affectedRows === 0) {
        res.status(400).send("Movie could not be updated.");
      } else {
        res.sendStatus(202);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

const deleteMovie = (req, res) => {
  const movieID = req.params.id;
  database
    .query("DELETE FROM movies WHERE id = ?", [movieID])
    .then((result) => {
      if (result[0].affectedRows === 0) {
        res.status(404).send("Movie not found.");
      } else {
        res.sendStatus(202);
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
  putMovie,
  patchMovie,
  deleteMovie,
};
