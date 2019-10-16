const db = require("../../data/dbConfig");

module.exports = {};

function getGames() {
  return db("games").select("*");
}
