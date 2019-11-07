const router = require("express").Router();
const db = require("./favorite_teams-model");
const teamsdb = require("../teams/team-model");
const restricted = require("../../auth/authMiddleware.js");

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

/*router.get("/:profile_id", (req, res) => {
  const { profile_id } = req.params;
  db.getFavoriteTeamsByProfileId(profile_id)
    .then(favorites => {
      if (favorites) {
        favorites = favorites.map(fav => fav.team_id);
        teamsdb
          .findTeamsByManyIds(favorites)
          .then(teams => res.status(200).json(teams));
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
  });*/

router.get("/:profile_id", (req, res) => {
  const { profile_id } = req.params;
  db.getFavoriteTeamsByProfileId(profile_id)
    .then(favorites => {
      res.status(200).json(favorites);
    })
    .catch(error => {
      res.status(500).json({ error: "failure to retrieve favorite teams" });
    });
});

// post favorite team to profile

router.post("/", restricted, (req, res) => {
  const teamData = req.body;
  //const profile_id = req.user.profile_id;
  db.insertFavoriteTeamByUser(teamData)
    .then(team => {
      res.status(200).json(team);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to Post" });
      console.log("error", error);
    });
});

// delete favorite team from profile

router.delete("/:favorite_id", (req, res) => {
  const { favorite_id } = req.params;
  db.removeFavoriteTeamByUser(favorite_id)
    .then(deleted => {
      if (deleted) {
        return res.status(204).end();
      } else {
        res.status(404).json({ message: "could not delete" });
        //console.log(res.status(404))
      }
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to delete" });
    });
});

module.exports = router;
