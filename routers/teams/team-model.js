const db = require('../../data/dbConfig');

module.exports = {
    findTeams,
    findTeamById,
    findTeamsByDivision,
    findTeamsByLeague,
};

function findTeams() {
    return db('teams').select('*');
}

function findTeamById(team_id) {
    return db('teams')
    .where('team_id', team_id);
}

function findTeamsByDivision(teamDivision) {
    console.log(teamDivision);
    return db('teams')
    .where({
        league: teamDivision.league,
        division: teamDivision.division
    });
}

function findTeamsByLeague(teamLeague) {
    console.log(teamLeague);
    return db('teams')
    .where('league', teamLeague);
}