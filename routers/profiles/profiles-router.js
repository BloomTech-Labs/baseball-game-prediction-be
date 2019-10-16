const router = require("express").Router();
const db = require("./profiles-model");

// Create a profile

router.post("/create", (req, res) => {
  const { firebase_id } = req.body;
  console.log(firebase_id);
  db.getProfileByFirebaseId(firebase_id)
    .then(profile => {
      if (profile.length > 0) {
        res
          .status(409)
          .json({ error: "A user with that firebase id already exists" });
      } else {
        db.addProfile(firebase_id)
          .then(newProfile => {
            res.status(200).json(newProfile);
          })
          .catch(err => console.log("error: ", err));
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error creating a profile" });
    });

  db.addProfile();
});

// Get all users

router.get("/", (req, res) => {
  db.getProfiles()
    .then(users => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(500).json({ error: "There are no users available" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting users" });
    });
});

// Get individual profile by profile_id

router.get("/:profile_id", (req, res) => {
  const { profile_id } = req.params;
  db.getProfileById(profile_id)
    .then(profile => {
      if (profile) {
        res.status(200).json(profile);
      } else {
        res.status(500).json({ error: "That profile does not exist" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting profile" });
    });
});

// Get individual profile by firebase id

router.get("/auth/:firebase_id", (req, res) => {
  const { firebase_id } = req.params;
  db.getProfileByFirebaseId(firebase_id)
    .then(profile => {
      if (profile) {
        res.status(200).json(profile);
      } else {
        res.status(500).json({ error: "That profile does not exist" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Server error getting profile" });
    });
});

module.exports = router;
