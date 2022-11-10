const express = require("express");
const movieHandlers = require("./movieHandlers");

const movieRouter = express.Router();

// Routes related to the whole collection
movieRouter.get("/", movieHandlers.getAllMovies);
movieRouter.post("/", movieHandlers.createMovie);

// Routes related to a single entity in the collection
movieRouter.get("/:id", movieHandlers.getMovieByID);

module.exports = movieRouter;