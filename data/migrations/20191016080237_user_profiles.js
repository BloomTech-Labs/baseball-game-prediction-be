exports.up = function(knex) {
  return knex.schema
    .createTable("profiles", profiles => {
      profiles.increments("profile_id").unique();
      profiles
        .string("firebase_id")
        .unique()
        .notNullable();
    })
    .createTable("favorite_teams", favorite_teams => {
      favorite_teams.increments("favorite_id").unique();
      favorite_teams
        .integer("profile_id")
        .unsigned()
        .notNullable()
        .references("profile_id")
        .inTable("profiles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      favorite_teams.string("team_name");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("favorite_teams")
    .dropTableIfExists("profiles");
};
