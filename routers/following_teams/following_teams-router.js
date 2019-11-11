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

router.get("/profile_id", (req, res) => {
    const {profile_id} = req.params
    db.getFollowingTeamsByProfileId(profile_id)
    .then(following => {
        res.status(200).json(following)
    })
    .catch(error => {
        res.status(500).json({message: "Server Error"})
    })
})

module.exports = router