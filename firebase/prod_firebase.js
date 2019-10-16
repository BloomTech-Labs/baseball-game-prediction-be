const firebase = require("firebase/app");
require("firebase/auth");

const firebaseApiKey = require("../config/keys").firebaseAPIKey;

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "prod-baseball-game-predictor.firebaseapp.com",
  databaseURL: "https://prod-baseball-game-predictor.firebaseio.com",
  projectId: "prod-baseball-game-predictor",
  storageBucket: "prod-baseball-game-predictor.appspot.com",
  messagingSenderId: "750496789573",
  appId: "1:750496789573:web:567c95e6fe63e5a615df2c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
