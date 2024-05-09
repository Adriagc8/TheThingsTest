class AppError extends Error {
  constructor({ type, message }) {
    super(message);
    this.type = type;
  }
}

AppError.type = {
  internalServerError: "internal-server-error",
  notAuthenticated: "not-authenticated",
  notAuthorized: "not-authorized",
  notFound: "not-found",
  notValid: "not-valid",
};


module.exports = AppError;
