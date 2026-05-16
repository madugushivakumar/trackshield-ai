const dotenv =
    require("dotenv");

// =====================================
// LOAD ENV
// =====================================
dotenv.config();

// =====================================
// ENV VARIABLES
// =====================================
const env = {

  NODE_ENV:
      process.env.NODE_ENV ||

      "development",

  PORT:
      process.env.PORT ||

      5000,

  CLIENT_URL:
      process.env.CLIENT_URL ||

      "http://localhost:3000",

  MONGO_URI:
      process.env.MONGO_URI,

  JWT_SECRET:
      process.env.JWT_SECRET,

  JWT_EXPIRES:
      process.env.JWT_EXPIRES ||

      "7d",

  REDIS_URL:
      process.env.REDIS_URL,

  FIREBASE_PROJECT_ID:
      process.env.FIREBASE_PROJECT_ID,

  CLOUDINARY_CLOUD_NAME:
      process.env.CLOUDINARY_CLOUD_NAME,

  CLOUDINARY_API_KEY:
      process.env.CLOUDINARY_API_KEY,

  CLOUDINARY_API_SECRET:
      process.env.CLOUDINARY_API_SECRET,
};

// =====================================
// VALIDATE REQUIRED ENV
// =====================================
const requiredEnv = [

  "MONGO_URI",

  "JWT_SECRET",
];

requiredEnv.forEach((key) => {

  if (!process.env[key]) {

    throw new Error(

      `Missing ENV Variable: ${key}`,
    );
  }
});

module.exports =
    env;