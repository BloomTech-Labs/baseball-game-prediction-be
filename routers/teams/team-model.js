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

function findTeamsByDivision(division, league) {
    return db('teams')
    .where({
        division: division,
        league: league
    });
}

function findTeamsByLeague({league}) {
    return db('teams')
    .where('league', league);
}