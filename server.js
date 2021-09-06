// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const scoresRouter = require("./routes/scores.js");

app.use(cors());

const app = express();

mongoose.connect(process.env.ATLAS_URI);

const db = mongoose.connection;

db.on("error", (err) => console.err(err));
db.once("open", () => console.log("Connected to DB "));

app.use(express.json());

app.use("/scores", scoresRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});
