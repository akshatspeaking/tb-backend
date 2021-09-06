const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

router.get("/", async (req, res) => {
  try {
    // console.log("Get scoreboard");
    const scoreList = await Score.find().sort({ score: 1 }).limit(10);
    res.json(scoreList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const score = new Score({
      name: req.body.name,
      score: req.body.score,
    });
    const newScore = await score.save();
    const scoreList = await Score.find().sort({ score: 1 });

    const rank = scoreList.indexOf(
      scoreList.find((obj) => obj.id === newScore.id)
    );

    const topten = scoreList.slice(0, 10);

    //
    res.status(200).json({ scoreList: topten, rank });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
