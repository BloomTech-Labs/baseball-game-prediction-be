const router = require('express').Router();
const db = require('./game-model');

// Get all games

router.get('/', (req, res) => {
    db.getGames()
    .then(games => {
        res.status(200).json(games)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server error getting games" })
    });
})

// Get individual game

router.get('/:game_id', (req, res) => {
    const { game_id } = req.params;
    db.getGameById(game_id)
    .then(game => {
        res.status(200).json(game)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server error getting game" })
    });
})

// Get games from a certain team

router.get('/team/:team_id', (req, res) => {
    const { team_id } = req.params;
    db.getGamesByTeamId(team_id)
    .then(games => {
        res.status(200).json(games)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server error getting games from that team" })
    });
})

// Get games from a certain date

router.get('/date/:date', (req, res) => {
    const { date } = req.params
    db.getGamesByDate(date)
    .then(games => {
        res.status(200).json(games)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server error getting games from that date" })
    });
})

// Get completed or incomplete games

router.get('/completed/:completed', (req, res) => {
    const { completed } = req.params
    db.getGamesByCompleted(completed)
    .then(games => {
        res.status(200).json(games)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server error getting games" })
    });
})

module.exports = router;