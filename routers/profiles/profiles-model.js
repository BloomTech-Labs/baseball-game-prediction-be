const db = require("../../data/dbConfig");

module.exports = {
  getProfiles,
  getProfileById,
  getProfileByFirebaseId
};

function getProfiles() {
  return db("profiles").select("*");
}

function getProfileById(profile_id) {
  return db("profiles").where("profile_id", profile_id);
}

function getProfileByFirebaseId(firebase_id) {
  return db("profiles").where("firebase_id", firebase_id);
}
