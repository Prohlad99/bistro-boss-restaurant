const createError = require("http-errors");

// not found error handler
function notFoundErrorHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// default error handler
function defaultErrorHandler(err, req, res, next) {
  const statusCode = err.status || 500;
  res.status(statusCode).json(err);
}

module.exports = {
  notFoundErrorHandler,
  defaultErrorHandler,
};
