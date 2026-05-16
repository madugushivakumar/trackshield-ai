const crypto =
    require("crypto");

// =====================================
// GENERATE RANDOM ID
// =====================================
const generateId =
    () => {

  return crypto
      .randomBytes(16)
      .toString("hex");
};

// =====================================
// FORMAT DATE
// =====================================
const formatDate =
    (date) => {

  return new Date(date)
      .toISOString();
};

// =====================================
// GENERATE OTP
// =====================================
const generateOTP =
    () => {

  return Math.floor(

    100000 +

    Math.random() *

    900000,
  );
};

module.exports = {

  generateId,

  formatDate,

  generateOTP,
};