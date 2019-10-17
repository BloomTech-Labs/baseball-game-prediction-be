const db = require("../../data/dbConfig");

module.exports = {
  getFavoriteTeams,
  getFavoriteTeamsByProfileId,
  insertFavoriteTeamByUser,
  removeFavoriteTeamByUser
};

function getFavoriteTeams() {
  return db("favorite_teams").select("*");
}

function getFavoriteTeamsByProfileId(profile_id) {
  return db("favorite_teams").where("profile_id", profile_id);
}

function insertFavoriteTeamByUser(team) {
  return db('teams')
  .insert(team)
  .then(ids => {
    return getFavoriteTeamsByProfileId(ids[0])
  })
}

function removeFavoriteTeamByUser(id) {
  return db('favorite_teams')
    .where("favorite_id", id)
    .del()
}

