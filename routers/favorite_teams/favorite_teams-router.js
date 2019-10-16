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

// Get favorite teams by profile id

router.get("/:profile_id", (req, res) => {
  const { profile_id } = req.params;
  db.getFavoriteTeamsByProfileId(profile_id)
    .then(favorites => {
      if (favorites) {
        res.status(200).json(favorites);
      } else {
        res
          .status(500)
          .json({ error: "That profile does not have any favorite teams" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting favorite teams" });
    });
});

module.exports = router;
