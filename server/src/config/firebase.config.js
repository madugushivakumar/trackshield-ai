const admin =
    require("firebase-admin");

const path =
    require("path");

// =====================================
// FIREBASE SERVICE ACCOUNT
// =====================================
const serviceAccount =
    require(

      path.join(

        __dirname,

        "../../firebase-service-account.json",
      ),
    );

// =====================================
// INITIALIZE FIREBASE
// =====================================
admin.initializeApp({

  credential:
      admin.credential.cert(
        serviceAccount,
      ),

  storageBucket:
      process.env.FIREBASE_STORAGE_BUCKET,
});

// =====================================
// SERVICES
// =====================================
const firestore =
    admin.firestore();

const realtimeDB =
    admin.database();

const auth =
    admin.auth();

const messaging =
    admin.messaging();

const storage =
    admin.storage();

console.log(
  "Firebase Connected",
);

module.exports = {

  admin,

  firestore,

  realtimeDB,

  auth,

  messaging,

  storage,
};