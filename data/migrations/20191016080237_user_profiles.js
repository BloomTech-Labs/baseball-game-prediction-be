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
      favorite_teams.string("abbreviation");
      favorite_teams.integer("favorite")
      // favorite_teams.integer("favorite").unique(); needs to be changed. The goal was to prevent a user from adding multiple teams as a favorite, this solution does not work as intended as it causes other users to also not be able to add the same team.
      favorite_teams
        .integer("profile_id")
        .unique()
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
    })
    .createTable("following", following => {
      following.increments("following_id").unique()
      following.string("abbreviation")
      following
        .integer("profile_id")        
        .unsigned()
        .notNullable()
        .references("profile_id")
        .inTable("profiles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    following
        .integer("team_id")
        .unsigned()
        .notNullable()
        .references("team_id")
        .inTable("teams")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("favorite_teams")
    .dropTableIfExists("profiles")
    .dropTableIfExists("following")
};
