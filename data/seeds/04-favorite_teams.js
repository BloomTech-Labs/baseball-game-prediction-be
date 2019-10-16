exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("favorite_teams")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("favorite_teams").insert([
        { favorite_id: 1, profile_id: 1, team_name: "Colorado Rockies" },
        { favorite_id: 2, profile_id: 1, team_name: "Arizona Diamondbacks" },
        { favorite_id: 3, profile_id: 2, team_name: "Chicago Cubs" },
        { favorite_id: 4, profile_id: 3, team_name: "St. Louis Cardinals" },
        { favorite_id: 5, profile_id: 2, team_name: "Miami Marlins" }
      ]);
    });
};
