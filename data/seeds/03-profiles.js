exports.seed = function(knex) {
  // Inserts seed entries
  return knex("profiles").insert([
    { profile_id: 1, firebase_id: "123456" },
    { profile_id: 2, firebase_id: "234567" },
    { profile_id: 3, firebase_id: "345678" }
  ]);
};
