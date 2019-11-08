const router = require("express").Router();
const db = require("./team-model");

// Get all teams

router.get("/", (req, res) => {
  db.findTeams()
    .then(teams => {
      res.status(200).json(teams);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting teams" });
    });
});

// Get individual team

router.get("/:team_id", (req, res) => {
  const { team_id } = req.params;
  db.findTeamById(team_id)
    .then(team => {
      res.status(200).json(team);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting team" });
    });
});

// Get teams in a certain division

router.get("/:league/:division", (req, res) => {
  const { league, division } = req.params;
  const teamDivision = {
    league: league,
    division: division
  };
  db.findTeamsByDivision(teamDivision)
    .then(teams => {
      res.status(200).json(teams);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ error: "Server error getting teams in that division" });
    });
});

// Get teams in a certain league

router.get("/:league", (req, res) => {
  const { league } = req.params;
  const teamLeague = league;
  db.findTeamsByLeague(teamLeague)
    .then(teams => {
      res.status(200).json(teams);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ error: "Server error getting teams in that league" });
    });
});

router.post("/abbr", (req, res) => {
  const abbr = req.body.abbreviation;

  db.findTeamByAbbr(abbr)
    .then(team => {
      res.status(200).json(team);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting that team" });
    });
});

module.exports = router;
