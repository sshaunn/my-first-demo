const firebase = require('firebase');
const config = require('./config');

const firebasedb = firebase.initializeApp(config.firebaseConfig);

module.exports = firebasedb;