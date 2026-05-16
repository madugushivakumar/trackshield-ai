import { initializeApp }
from "firebase/app";

import {
  getDatabase,
} from "firebase/database";

// =====================================
// FIREBASE CONFIG
// =====================================
const firebaseConfig = {

  apiKey:
    "YOUR_API_KEY",

  authDomain:
    "YOUR_PROJECT.firebaseapp.com",

  databaseURL:
    "https://YOUR_PROJECT-default-rtdb.firebaseio.com",

  projectId:
    "YOUR_PROJECT",

  storageBucket:
    "YOUR_PROJECT.appspot.com",

  messagingSenderId:
    "XXXXXXXX",

  appId:
    "XXXXXXXX",
};

// =====================================
// INITIALIZE FIREBASE
// =====================================
const app =
  initializeApp(
    firebaseConfig
  );

// =====================================
// REALTIME DATABASE
// =====================================
const database =
  getDatabase(app);

// =====================================
// EXPORTS
// =====================================
export {
  database,
};