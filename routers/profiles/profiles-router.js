const router = require("express").Router();
const db = require("./profiles-model");
const firebase = require("../../firebase/dev_firebase");

console.log(process.env);

// Create a profile

router.post("/create", (req, res) => {
  const { email, password } = req.body;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(newUser => {
      console.log(newUser.user.uid);

      const firebase_id = newUser.user.uid;

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
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });
});

// Sign in and get user id

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const firebase_id = user.user.uid;

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
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });
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

module.exports = router;
