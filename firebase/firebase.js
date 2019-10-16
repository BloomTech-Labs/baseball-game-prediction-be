const firebase = require("firebase/app");
require("firebase/auth");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzcmNlBeWRbBXUsTKx-rutL0huEE-WoWQ",
  authDomain: "baseball-game-predictor.firebaseapp.com",
  databaseURL: "https://baseball-game-predictor.firebaseio.com",
  projectId: "baseball-game-predictor",
  storageBucket: "baseball-game-predictor.appspot.com",
  messagingSenderId: "567971916278",
  appId: "1:567971916278:web:2c9516306cc2ea2e0dbfd7",
  measurementId: "G-BY0HMCGV9F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
