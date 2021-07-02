const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

//!firebaseAdmin.apps.length ? firebaseAdmin.initializeApp({
//    credential: firebaseAdmin.credential.cert(serviceAccount),
//    databaseURL: 'https://devter-4ad73.firebaseio.com'
//  }) : firebaseAdmin.app();

try {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: 'https://devter-4ad73.firebaseio.com'
      });
} catch (e) {}

export const firestore = firebaseAdmin.firestore()