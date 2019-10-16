const router = require("express").Router();
const db = require("./profiles-model");

// Create a profile
/*


export const createUser = ({email, password}) => async dispatch => {
  const inputErrors = {};
  if (!email || email.length === 0) {
    inputErrors.email = true;
  } if (!password || password.length === 0) {
    inputErrors.password = true;
  }
  if (!inputErrors.email && !inputErrors.password) {
    dispatch('isLoading', true);
    try {
      const credentialData = await firebase.auth().createUserWithEmailAndPassword(email, password);
      localState.userProfile = getUserProfileDetails(credentialData);
      dispatch('userProfile', localState.userProfile);
      dispatch('success');
    } catch (error) {
      dispatch('error', error.message);
    }
    dispatch('isLoading', false);
  } else {
    dispatch('inputErrors', inputErrors);
  }
};
*/
router.post("/create", (req, res) => {
  
  const createUser = ({email, password}) => async dispatch => {
    const inputErrors = {};
    if (!email || email.length === 0) {
      inputErrors.email = true;
    } if (!password || password.length === 0) {
      inputErrors.password = true;
    }
    if (!inputErrors.email && !inputErrors.password) {
      dispatch('isLoading', true);
      try {
        const credentialData = await firebase.auth().createUserWithEmailAndPassword(email, password);
        localState.userProfile = getUserProfileDetails(credentialData);
        dispatch('userProfile', localState.userProfile);
        dispatch('success');
        console.log(credentialData)
        return credentialData;
      } catch (error) {
        dispatch('error', error.message);
      }
      dispatch('isLoading', false);
    } else {
      dispatch('inputErrors', inputErrors);
    }
  };

  const user = createUser({ email, password } = req.body);
  console.log(user);
  //npm createUser({ email, password } = req.body);
  // const { firebase_id } = req.body;
  // db.getProfileByFirebaseId(firebase_id)
  //   .then(profile => {
  //     if (profile.length > 0) {
  //       res
  //         .status(409)
  //         .json({ error: "A user with that firebase id already exists" });asdfsdafas
  //     } else {
  //       db.addProfile(firebase_id)
  //         .then(newProfile => {
  //           res.status(200).json(newProfile);
  //         })
  //         .catch(err => console.log("error: ", err));
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json({ error: "Server error creating a profile" });
  //   });

  // db.addProfile();
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


/* 
  ALL AUTHORIZATION FUNCTIONS:

  import pick from 'lodash/pick';
import firebase from 'firebase';

let localState = {
  userProfile: null
};

function getUserProfileDetails (credentialData) {
  let result = {};
  if (credentialData) {
    const {user} = credentialData;
    result = pick(user, [
      'displayName', 'email',
      'emailVerified', 'isAnonymous',
      'phoneNumber', 'photoURL',
      'uid', 'providerId',
    ]);
  }
  return result;
}

/*
    apiKey: "AIzaSyBzcmNlBeWRbBXUsTKx-rutL0huEE-WoWQ",
    authDomain: "baseball-game-predictor.firebaseapp.com",
    databaseURL: "https://baseball-game-predictor.firebaseio.com",
    projectId: "baseball-game-predictor",
    storageBucket: "baseball-game-predictor.appspot.com",
    messagingSenderId: "567971916278",
    appId: "1:567971916278:web:6ab6bb0bf981b7a10dbfd7",
    measurementId: "G-EZRXDM3DST"
  Init Firebase connection.

 */
// export const initApplication = () => dispatch => {
//   // Initialize Firebase
//   let config = {
//     apiKey: "AIzaSyBzcmNlBeWRbBXUsTKx-rutL0huEE-WoWQ",
//     authDomain: "baseball-game-predictor.firebaseapp.com",
//     databaseURL: "https://baseball-game-predictor.firebaseio.com",
//     projectId: "baseball-game-predictor",
//     storageBucket: "baseball-game-predictor.appspot.com",
//     messagingSenderId: "567971916278",
//     appId: "1:567971916278:web:6ab6bb0bf981b7a10dbfd7",
//     measurementId: "G-EZRXDM3DST"
//   };
//   firebase.initializeApp(config);
// };

// /*
//   Checks if the local state has been initialized with user profile data fetched during the authentication process
  
//   Dispatching:
//  * **authenticated** - the userProfile object
//  * **notAuthenticated** - fires when there is no userProfile object initialized. No value is dispatched.

//  */
// export const checkUserProfile = () => dispatch => {
//   if (!localState.userProfile) {
//     dispatch('notAuthenticated');
//   } else {
//     dispatch('authenticated', localState.userProfile);
//   }
// };

// /*
//   Invokes the Firebase function with email and password to get the user profile

//   Parameters:
//  * **object** - object that holds `email` and `password` fields

//   Dispatching:
//  * **isLoading** - the boolean flag, `true` - the request is processed, `false` - the request is finished
//  * **inputErrors** - the input errors indicators: `email`, `password`
//  * **error** - the error text from the request
//  * **userProfile** - fires when the request finished successfully, dispatches userProfile object
//  * **success** - fires when the request finished successfully, no data dispatched

//  */
// export const authUser = ({email, password}) => async dispatch => {
//   const inputErrors = {};
//   if (!email || email.length === 0) {
//     inputErrors.email = true;
//   } if (!password || password.length === 0) {
//     inputErrors.password = true;
//   }
//   if (!inputErrors.email && !inputErrors.password) {
//     dispatch('isLoading', true);
//     try {
//       const credentialData = await firebase.auth().signInWithEmailAndPassword(email, password);
//       localState.userProfile = getUserProfileDetails(credentialData);
//       dispatch('userProfile', localState.userProfile);
//       dispatch('success');
//     } catch (error) {
//       dispatch('error', error.message);
//     }
//     dispatch('isLoading', false);
//   } else {
//     dispatch('inputErrors', inputErrors);
//   }
// };

// /*
//   Invokes the Firebase function that creates user account with email and password.

//   Parameters:
//  * **object** - object that holds `email` and `password` fields

//   Dispatching:
//  * **isLoading** - the boolean flag, `true` - the request is processed, `false` - the request is finished
//  * **inputErrors** - the input errors indicators: `email`, `password`
//  * **userProfile** - fires when the request finished successfully, dispatches userProfile object
//  * **success** - fires when the request finished successfully, no data dispatched

//  */
// export const createUser = ({email, password}) => async dispatch => {
//   const inputErrors = {};
//   if (!email || email.length === 0) {
//     inputErrors.email = true;
//   } if (!password || password.length === 0) {
//     inputErrors.password = true;
//   }
//   if (!inputErrors.email && !inputErrors.password) {
//     dispatch('isLoading', true);
//     try {
//       const credentialData = await firebase.auth().createUserWithEmailAndPassword(email, password);
//       localState.userProfile = getUserProfileDetails(credentialData);
//       dispatch('userProfile', localState.userProfile);
//       dispatch('success');
//     } catch (error) {
//       dispatch('error', error.message);
//     }
//     dispatch('isLoading', false);
//   } else {
//     dispatch('inputErrors', inputErrors);
//   }
// };

