const router = require("express").Router();
const db = require("./favorite_teams-model");

// Get all favorite teams

router.get("/", (req, res) => {
  db.getFavoriteTeams()
    .then(favorites => {
      if (favorites) {
        res.status(200).json(favorites);
      } else {
        res
          .status(500)
          .json({ error: "There are no favorite teams available" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting favorite teams" });
    });
});

module.exports = router;
