require("dotenv").config();

const express = require("express");
const cors = require("cors");

const database = require("./database");
const movieRouter = require("./movies/movieRouter");

// Explicit:
// const BACKEND_PORT = parseInt(process.env.BACKEND_PORT ?? "5005", 10);
// Implicit:
const BACKEND_PORT = process.env.BACKEND_PORT ?? 5005;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  let output = "";
  let error = false;
  database.getConnection().then(() => {
    output += "Database connection working well.\n";
  }).catch((err) => {
    error = true; // We missed this in part 1
    console.error(err);
    output += "Database connection malfunctioning.\n";
  }).finally(() => {
    if(error) {
      res.status(500).send(output);
    } else {
      res.status(200).send("Welcome to our API!\n" + output);
    }
  });
});

app.use("/movies", movieRouter);

app.listen(BACKEND_PORT, () => {
  console.log("Listening on port", BACKEND_PORT);
})