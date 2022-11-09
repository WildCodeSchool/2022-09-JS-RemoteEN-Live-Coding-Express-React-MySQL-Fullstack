require("dotenv").config();

const express = require("express");

// Explicit:
// const BACKEND_PORT = parseInt(process.env.BACKEND_PORT ?? "5005", 10);
// Implicit:
const BACKEND_PORT = process.env.BACKEND_PORT ?? 5005;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our API!");
});

app.listen(BACKEND_PORT, () => {
  console.log("Listening on port", BACKEND_PORT);
})