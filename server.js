require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const scoresRouter = require("./routes/scores.js");

const app = express();

mongoose.connect(process.env.ATLAS_URI);

const db = mongoose.connection;

db.on("error", (err) => console.err(err));
db.once("open", () => console.log("Connected to DB "));

app.use(express.json());

app.use("/scores", scoresRouter);

app.listen(5000, () => {
  console.log("Server started");
});
