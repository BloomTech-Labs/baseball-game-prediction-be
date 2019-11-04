const router = require("express").Router();
const db = require("./profiles-model");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const knex = require('knex')
const knexfile = require('../../knexfile.js')
const knexConfig = knexfile.development
/*let firebase;

if (process.env.NODE_ENV === "production") {
  firebase = require("../../firebase/prod_firebase");
} else {
  firebase = require("../../firebase/dev_firebase");
}*/

// Create a profile

router.post("/create", (req, res) => {
  const newUser = req.body;
  newUser.password = bcrypt.hashSync(newUser.password, 10)
  db.add(newUser)
  .then(registeredUser => {
    res.status(201).json({message: "You are registered"})
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

router.delete('/:profile_id', (req, res) => {
  const {profile_id} = req.params
  db.deleteProfile(profile_id)
  .then(deleted => {
    if(deleted) {
      res.json({removed: deleted})
    } else {
      res.status(404).json({message: "could not find Profile with given id"})
    }
  })
  .catch(err => {
    res.status(500).json({message: "Failed to delete profile"})
  })
})
  /*firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(newUser => {
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
      res.status(500).json({ error: errorMessage });
    });
});*/

// Sign in and get user id

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.getProfileById({username})
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user)
      res.status(200).json({message: "Welcome!", token, id: user.profile_id})
    } else {
      res.status(401).json({message: "This is not a registered User"})
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

  /*firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const firebase_id = user.user.uid;
      db.getProfileByFirebaseId(firebase_id)
        .then(profile => {
          if (profile) {
            const token = generateToken(profile)           
            res.status(200).json({message: "Welcome", token});
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
      res.status(500).json({ error: errorMessage });
    });
});*/

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
  db.profileId(profile_id)
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

function generateToken(profile) {
  const payload = {
    username: profile.username, id: profile.profile_id
  }
  const secret = "keep it secret, keep it safe"
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, secret, options)
}

module.exports = router;
