const db = require("../../data/dbConfig");

module.exports = {
  findTeams,
  findTeamById,
  findTeamsByDivision,
  findTeamsByLeague,
  findTeamsByManyIds,
  //deleteFavoriteTeam,
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
  /*.join("favorite_teams", "favorite_teams.team_id", "=", "teams.team_id")
  .select(
    "favorite_teams.favorite_id",
    "teams.abbreviation",
    "teams.division",
    "teams.league",
    "teams.logo",
    "teams.team_id",
    "teams.team_name"
  )*/
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

/*function deleteFavoriteTeam(id) {
  return db('favorite_team')
    .join("teams", 'favorite_team.team_id', "=", "teams.team_id")
    .select(
      "favorite_team.profile_id",
      "favorite_team.favorite_id",
      "favorite_team.team_id",
      "team.team_name"
    )
}*/

function findTeamByAbbr(abbr) {
  return db("teams").where("abbreviation", abbr);
}
