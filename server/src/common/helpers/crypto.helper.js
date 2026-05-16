const crypto =
    require("crypto");

// =====================================
// HASH DATA
// =====================================
const hashData =
    (data) => {

  return crypto
      .createHash("sha256")
      .update(data)
      .digest("hex");
};

// =====================================
// GENERATE RANDOM TOKEN
// =====================================
const generateToken =
    (size = 32) => {

  return crypto
      .randomBytes(size)
      .toString("hex");
};

// =====================================
// ENCRYPT DATA
// =====================================
const encrypt =
    (text) => {

  const algorithm =
      "aes-256-cbc";

  const key =
      crypto.scryptSync(

        process.env.JWT_SECRET,

        "salt",

        32,
      );

  const iv =
      crypto.randomBytes(16);

  const cipher =
      crypto.createCipheriv(

        algorithm,

        key,

        iv,
      );

  let encrypted =
      cipher.update(

        text,

        "utf8",

        "hex",
      );

  encrypted +=
      cipher.final("hex");

  return {

    iv:
        iv.toString("hex"),

    encryptedData:
        encrypted,
  };
};

// =====================================
// DECRYPT DATA
// =====================================
const decrypt =
    (encryptedData, iv) => {

  const algorithm =
      "aes-256-cbc";

  const key =
      crypto.scryptSync(

        process.env.JWT_SECRET,

        "salt",

        32,
      );

  const decipher =
      crypto.createDecipheriv(

        algorithm,

        key,

        Buffer.from(iv, "hex"),
      );

  let decrypted =
      decipher.update(

        encryptedData,

        "hex",

        "utf8",
      );

  decrypted +=
      decipher.final("utf8");

  return decrypted;
};

module.exports = {

  hashData,

  generateToken,

  encrypt,

  decrypt,
};