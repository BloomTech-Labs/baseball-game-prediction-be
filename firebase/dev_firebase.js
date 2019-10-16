const firebase = require("firebase/app");
require("firebase/auth");

const firebaseApiKey = require("../config/keys").firebaseAPIKey;

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "baseball-game-pre.firebaseapp.com",
  databaseURL: "https://baseball-game-pre.firebaseio.com",
  projectId: "baseball-game-pre",
  storageBucket: "baseball-game-pre.appspot.com",
  messagingSenderId: "512231385270",
  appId: "1:512231385270:web:350e2c4486bdb25815de17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
