const nodemailer =
    require("nodemailer");

// =====================================
// EMAIL TRANSPORTER
// =====================================
const transporter =
    nodemailer.createTransport({

      service: "gmail",

      auth: {

        user:
            process.env.EMAIL_USER,

        pass:
            process.env.EMAIL_PASS,
      },
    });

// =====================================
// SEND EMAIL
// =====================================
const sendEmail =
    async (

      to,

      subject,

      text,
    ) => {

  try {

    await transporter.sendMail({

      from:
          process.env.EMAIL_USER,

      to,

      subject,

      text,
    });

    console.log(
      "Email Sent Successfully",
    );

  } catch (e) {

    console.log(
      "Email Error:",
      e.message,
    );
  }
};

module.exports = {

  sendEmail,
};