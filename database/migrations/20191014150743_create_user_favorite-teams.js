exports.up = function(knex) {
  return knex.schema.createTable("user_favorite_teams", teams => {
    teams.increments();

    teams.string("team_name", 128);
    teams
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE") // what happens if the user is deleted
      .onUpdate("CASCADE"); // what happens if the id of the user changes
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_favorite_teams");
};
