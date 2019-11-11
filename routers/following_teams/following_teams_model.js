const db = require("../../data/dbConfig")

module.exports = {
    getFollowingTeams,
    getFollowingTeamsByProfileId,
    insertFollowingTeams,
    removeFollowingTeams
}

function getFollowingTeams() {
    return db("following").select("*")
}

function getFollowingTeamsByProfileId(profile_id) {
return db("following").where("profile_id", profile_id)
}

function insertFollowingTeams(team) {
    return db("following")
    .insert(team)
    .then(ids => {
        return getFollowingTeams(ids[0])
    })
}

function removeFollowingTeams(id) {
    return db("following")
    .where("following_id", id)
    .del()
}