const APIError = require("../error/APIError");
const httpStatus = require("http-status-codes");

const handler = (err, req, res) => {
  console.log(err);

  const response = {
    error: {
      code: err.code,
      message: err.message,
    },
  };
  res.status(err.status);
  res.json(response);
};

const convertError = (err, req, res, next) => {
  let convertedError = err;
  if (err.error && err.error.name === "ValidationError") {
    convertedError = new APIError({
      code: "VALIDATION ERROR",
      message: err.error.message,
      status : httpStatus.StatusCodes.BAD_REQUEST,
    });
  } else if (!(err instanceof APIError)) {
    let msg, status, code;
    if (err.message === "Conflict Error") {
      msg = err.message;
      status = httpStatus.StatusCodes.CONFLICT;
      code = 400;
    } else {
      msg = "Something Unexpected happened!";
      status = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
      code = 500;
    }
    convertedError = new APIError({
      code: code,
      message: msg,
      status: status,
    });
  }
  return handler(convertedError, req, res);
};

const notFound = (req, res, next) => {
  const err = new APIError({
    code: 100,
    message: "Url Not Found",
    status: httpStatus.StatusCodes.NOT_FOUND,
    isPublic: true,
  });
  return handler(err, req, res);
};

module.exports = {
  convertError,
  notFound,
};
