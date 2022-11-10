const express = require("express");
const movieHandlers = require("./movieHandlers");

const movieRouter = express.Router();

movieRouter.get("/", movieHandlers.getAllUsers);

module.exports = movieRouter;