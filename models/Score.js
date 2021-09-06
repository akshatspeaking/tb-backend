const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Score", ScoreSchema);
