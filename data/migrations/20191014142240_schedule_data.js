
exports.up = function(knex) {
  return knex.schema
  .createTable('teams', teams => {
    teams.increments('team_id')
    .unique();
    teams
    .string('team_name', 255)
    .notNullable();
    teams
    .string('league', 255)
    .notNullable();
    teams
    .string('division', 255)
    .notNullable();
    teams
    .string('logo', 255);
    teams
    .string('abbreviation', 255);
    teams
    .string('manager', 255)
    teams
    .integer('game_count')

  })
  .createTable('games', games => {
    games.increments('game_id')
    .unique();
    games
    .integer('home_id')
    .unsigned()
    .notNullable()
    .references('team_id')
    .inTable('teams')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    games
    .integer('away_id')
    .unsigned()
    .notNullable()
    .references('team_id')
    .inTable('teams')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    games
    .date('date');
    games
    .string('score', 255);
    games
    .boolean('completed')
    .notNullable()
    .defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('games')
  .dropTableIfExists('teams');
};
