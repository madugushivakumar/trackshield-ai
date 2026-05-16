const cloudinary =
    require("cloudinary").v2;

// =====================================
// CLOUDINARY CONFIG
// =====================================
cloudinary.config({

  cloud_name:
      process.env.CLOUDINARY_CLOUD_NAME,

  api_key:
      process.env.CLOUDINARY_API_KEY,

  api_secret:
      process.env.CLOUDINARY_API_SECRET,

  secure: true,
});

// =====================================
// VERIFY CONNECTION
// =====================================
cloudinary.api.ping(

  (error, result) => {

    if (error) {

      console.log(
        "Cloudinary Error:",
        error.message,
      );

    } else {

      console.log(
        "Cloudinary Connected",
      );
    }
  },
);

module.exports =
    cloudinary;