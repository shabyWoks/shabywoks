import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE__PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE__MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default };