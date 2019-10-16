const db = require("../../data/dbConfig");

module.exports = {
  getFavoriteTeams
};

function getFavoriteTeams() {
  return db("favorite_teams").select("*");
}
