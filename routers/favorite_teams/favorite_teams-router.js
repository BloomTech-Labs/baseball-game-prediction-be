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

// post favorite team to profile

router.post('/', (req, res) => {
  const teamData = req.body
  db.insertFavoriteTeamByUser(teamData)
    .then(team => {
      res.status(200).json(team)
    })
    .catch(error => {
      res.status(500).json({message: "Failed to Post"})
    })
})

// delete favorite team from profile

router.delete('/:favorite_id', (req, res) => {
  const {id} = req.params
  db.removeFavoriteTeamByUser(id)
    .then(deleted => {
      if(deleted) {
        return res.status(204).end()
      } else {
        res.status(404).json({message: "could not delete"})
      }
    })
    .catch(error => {
      res.status(500).json({message: "Failed to delete"})
    })
})

router.delete('/:favorite_id', restricted, (req, res) => {
  const {id} = req.params
  Users.remove(id)
      .then(deleted => {
          if(deleted) {
              return res.status(204).end()
          } else {
              res.status(404).json({message: "Could not delete"})
          }
      })
      .catch(error => {
          res.status(500).json({message: "failed to delete"})
      })
})

module.exports = router;
