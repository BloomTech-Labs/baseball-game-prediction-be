const db = require("../../data/dbConfig");

module.exports = {
  getFavoriteTeams,
  getFavoriteTeamsByProfileId
};

function getFavoriteTeams() {
  return db("favorite_teams").select("*");
}

function getFavoriteTeamsByProfileId(profile_id) {
  return db("favorite_teams").where("profile_id", profile_id);
}
