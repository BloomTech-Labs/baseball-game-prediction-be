const db = require("../../data/dbConfig");

module.exports = {
  getProfiles,
  getProfileById,
  /*getProfileByFirebaseId,*/
  /*addProfile*/
  add,
  profileId,
  deleteProfile
};

function getProfiles() {
  return db("profiles").select("*");
}

function profileId(profile_id) {
  return db("profiles").where("profile_id", profile_id)
}

function getProfileById(filter) {
  return db("profiles").where(filter);
}

/*function getProfileByFirebaseId(firebase_id) {
  return db("profiles").where("firebase_id", firebase_id);
}*/

/*async function addProfile(firebase_id) {
  if (firebase_id) {
    const [id] = await db("profiles").insert({ firebase_id }, "profile_id");
    return getProfileById(id);
  }
}*/

function add(profile) {
  return db('profiles')
  .insert(profile, 'profile_id')
  .then(ids => {
    const [id] = ids
    return getProfileById
  })
}

function deleteProfile(profile_id) {
  return db('profiles')
    .where({profile_id})
    .del()
}



