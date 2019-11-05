const db = require('../../data/dbConfig');

module.exports = {
    getGames,
    getGameById,
    getGamesByTeamId,
    getGamesByDate,
    getGamesByCompleted
};

function getGames() {
    return db('games').select('*');
}

function getGameById(game_id) {
    return db('games')
    .where('game_id', game_id);
}

function getGamesByTeamId(team_id) {
    return db('games')
    .where('home_id', team_id)
    .orWhere('away_id', team_id);
}

function getGamesByDate(date) {
    return db('games')
    .where('date', date);
}

function getGamesByCompleted(completed) {
    if(completed === "true"){
        return db('games')
        .where('completed', '1');
    } else {
        return db('games')
        .where('completed', '0');
    }
}