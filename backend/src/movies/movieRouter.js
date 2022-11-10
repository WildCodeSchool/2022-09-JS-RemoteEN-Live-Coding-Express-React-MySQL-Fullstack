const movieRouter = require("express").Router();
const movieHandlers = require("./movieHandlers");

movieRouter.get("/", movieHandlers.getAllUsers);

module.exports = movieRouter;