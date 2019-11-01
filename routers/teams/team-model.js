const db = require("../../data/dbConfig");

module.exports = {
  findTeams,
  findTeamById,
  findTeamsByDivision,
  findTeamsByLeague,
  findTeamsByManyIds,
  findTeamByAbbr
};

function findTeams() {
  return db("teams").select("*");
}

function findTeamById(team_id) {
  return db("teams").where("team_id", team_id);
}

function findTeamsByManyIds(ids) {
  return db("teams").whereIn("team_id", ids);
}

function findTeamsByDivision(teamDivision) {
  return db("teams").where({
    league: teamDivision.league,
    division: teamDivision.division
  });
}

function findTeamsByLeague(teamLeague) {
  return db("teams").where("league", teamLeague);
}

function findTeamByAbbr(abbr) {
  return db("teams").where("abbreviation", abbr);
}