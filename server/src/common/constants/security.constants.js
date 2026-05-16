module.exports = {

  JWT_EXPIRES_IN:
      "7d",

  PASSWORD_SALT_ROUNDS:
      12,

  MAX_LOGIN_ATTEMPTS:
      5,

  ACCOUNT_LOCK_TIME:
      15 * 60 * 1000,

  RATE_LIMIT_WINDOW:
      15 * 60 * 1000,

  RATE_LIMIT_MAX:
      100,

  AES_ALGORITHM:
      "aes-256-cbc",

  SECURITY_LEVELS: {

    LOW: "LOW",

    MEDIUM: "MEDIUM",

    HIGH: "HIGH",

    CRITICAL: "CRITICAL",
  },

  DEVICE_STATUS: {

    ONLINE: "ONLINE",

    OFFLINE: "OFFLINE",

    LOCKED: "LOCKED",

    STOLEN: "STOLEN",
  },
};