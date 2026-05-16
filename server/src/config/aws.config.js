const AWS =
    require("aws-sdk");

// =====================================
// AWS CONFIG
// =====================================
AWS.config.update({

  accessKeyId:
      process.env.AWS_ACCESS_KEY,

  secretAccessKey:
      process.env.AWS_SECRET_KEY,

  region:
      process.env.AWS_REGION,
});

// =====================================
// SERVICES
// =====================================
const s3 =
    new AWS.S3();

const sns =
    new AWS.SNS();

const sqs =
    new AWS.SQS();

module.exports = {

  AWS,

  s3,

  sns,

  sqs,
};