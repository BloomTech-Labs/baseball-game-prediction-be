exports.seed = function(knex) {

  // Deletes ALL existing entries
  return knex("profiles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("profiles").insert([
        { profile_id: 1, /*firebase_id: "123456"*/ email: 'sillysally@gmail.com', password: 'password' },
        { profile_id: 2, /*firebase_id: "234567"*/ email: 'johnnyrock@yahoo.com', password: 'password' },
        { profile_id: 3, /*firebase_id: "345678"*/ email: 'katyoshae@comcast.net', password: 'password' }
      ]);
    });
};
