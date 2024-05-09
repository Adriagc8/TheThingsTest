/**
 * Module for handling application errors.
 * @module error.controller
 * @requires ./app-error
 * @requires ../utils/express
 */
const AppError = require("./app-error");
const { createErrorMiddleware } = require("../utils/express");
/**
 * The controller function for handling application errors.
 * @param {Object} options - The options for the controller.
 * @param {Error} options.err - The error object.
 * @param {Object} options.res - The response object.
 * @returns {Promise<void>}
 */
function errorController({ err, res }) {
  console.error(err);
  if (err instanceof AppError) {
    return res.status(getStatus(err)).json({
      error: err.type,
      message: err.message,
    });
  }
  res.status(500).json({
    error: AppError.type.internalServerError,
    message: "Internal server error",
  });
}
/**
 * Gets the HTTP status code for an application error.
 * @param {AppError} appError - The application error.
 * @returns {Number} The HTTP status code.
 */
function getStatus(appError) {
  switch (appError.type) {
    case AppError.type.notAuthenticated:
      return 401;
    case AppError.type.notAuthorized:
      return 403;
    case AppError.type.notFound:
      return 404;
    case AppError.type.notValid:
      return 400;
    default:
      return 500;
  }
}

module.exports = createErrorMiddleware(errorController);
