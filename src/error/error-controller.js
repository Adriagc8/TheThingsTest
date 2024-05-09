const AppError = require("./app-error");

const { createErrorMiddleware } = require("../utils/express");

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
