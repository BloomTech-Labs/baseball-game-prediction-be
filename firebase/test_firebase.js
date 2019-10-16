const firebase = require("firebase/app");
require("firebase/auth");

const firebaseApiKey = process.env.TEST_FIREBASE_API_KEY;

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "test-baseball-game-predic.firebaseapp.com",
  databaseURL: "https://test-baseball-game-predic.firebaseio.com",
  projectId: "test-baseball-game-predic",
  storageBucket: "test-baseball-game-predic.appspot.com",
  messagingSenderId: "773583934057",
  appId: "1:773583934057:web:ca4eabc3f27107a8a9c8f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
