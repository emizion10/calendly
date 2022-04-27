const httpStatus = require("http-status-codes");

class APIError extends Error {
  constructor({
    message,
    code,
    status = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR,
    isPublic = false,
  }) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
  }
}

module.exports = APIError;
