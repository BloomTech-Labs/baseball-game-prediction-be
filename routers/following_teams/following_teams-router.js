const router = require("express").Router()
const db = require("./following_teams_model.js")
const restricted = require("../../auth/authMiddleware.js")

router.get("/", (req, res) => {
    db.getFollowingTeams()
    .then(following => {
        if (following) {
            res.status(200).json(following)
        } else {
            res.status(500)
            .json({error : "There are no teams you are following"})
        }
    })
    .catch(err => {
        res.status(500).json({error: "Server Error getting following teams"})
    })
})

module.exports = router