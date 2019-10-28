exports.up = function(knex) {
  return knex.schema
    .createTable("profiles", profiles => {
      profiles.increments("profile_id").unique();
      /*profiles
        .string("firebase_id")
        .unique()
        .notNullable();*/
      profiles
        .string("username")
        .notNullable()
        .unique();
      profiles.string("password");
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
      favorite_teams
        .integer("team_id")
        .unsigned()
        .notNullable()
        .references("team_id")
        .inTable("teams")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("favorite_teams")
    .dropTableIfExists("profiles");
};
