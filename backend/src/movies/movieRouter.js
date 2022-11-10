const express = require("express");
const movieHandlers = require("./movieHandlers");

const movieRouter = express.Router();

// Routes related to the whole collection
movieRouter.get("/", movieHandlers.getAllMovies);
movieRouter.post("/", movieHandlers.createMovie);

// Routes related to a single entity in the collection
movieRouter.get("/:id", movieHandlers.getMovieByID);
movieRouter.put("/:id", movieHandlers.putMovie);
movieRouter.patch("/:id", movieHandlers.patchMovie);
movieRouter.delete("/:id", movieHandlers.deleteMovie);

module.exports = movieRouter;