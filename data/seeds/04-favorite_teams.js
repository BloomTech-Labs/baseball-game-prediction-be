exports.seed = function(knex) {
  // Inserts seed entries
  return knex("favorite_teams").insert([
    { favorite_id: 1, profile_id: 1, team_name: "Colorado Rockies", team_id: 1 },
    { favorite_id: 2, profile_id: 1, team_name: "Arizona Diamondbacks", team_id: 2 },
    { favorite_id: 3, profile_id: 2, team_name: "Chicago Cubs", team_id: 6 },
    { favorite_id: 4, profile_id: 3, team_name: "St. Louis Cardinals", team_id: 10 },
    { favorite_id: 5, profile_id: 2, team_name: "Miami Marlins", team_id: 12  }
  ]);
};
