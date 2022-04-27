module.exports.handleRequest = (requestHandler) => {
  return async (req, res, next) => {
    try {
      requestHandler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
