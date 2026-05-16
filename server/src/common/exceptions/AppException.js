class AppException
    extends Error {

  constructor(

    message,

    statusCode = 500,
  ) {

    super(message);

    this.name =
        "AppException";

    this.statusCode =
        statusCode;

    Error.captureStackTrace(

      this,

      this.constructor,
    );
  }
}

module.exports =
    AppException;