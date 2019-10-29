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
  return db("favorite_teams")
    .insert(team)
    .then(ids => {
      return getFavoriteTeams(ids[0]);
    });
}

/*function insertFavoriteTeamByUser(teams) {
  return db('teams').select("team_name", "team_id")
  .then(team => {
    return db('favorite_teams')
    .insert(teams)
  .then(ids => {
    return getFavoriteTeams(ids[0])
  })
  })
  
}*/

function removeFavoriteTeamByUser(id) {
  return db("favorite_teams")
    .where("team_id", id)
    .del();
}

