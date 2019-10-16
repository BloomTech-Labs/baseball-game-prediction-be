const db = require("../../data/dbConfig");

module.exports = {
  getProfiles,
  getProfileById,
  getProfileByFirebaseId,
  addProfile
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

async function addProfile(firebase_id) {
  if (firebase_id) {
    const [id] = await db("profiles").insert({ firebase_id }, "profile_id");
    return getProfileById(id);
  }
}
