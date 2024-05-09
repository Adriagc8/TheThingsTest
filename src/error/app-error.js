/**
 * Class for representing application errors.
 * @module AppError
 * @extends Error
 * @property {String} type - The type of the error.
 */
class AppError extends Error {
  /**
   * Creates a new instance of AppError.
   * @param {Object} options - The options for the error.
   * @param {String} options.type - The type of the error.
   * @param {String} options.message - The message of the error.
   */
  constructor({ type, message }) {
    super(message);
    this.type = type;
  }
}
/**
 * The types of application errors.
 * @type {Object}
 */
AppError.type = {
  internalServerError: "internal-server-error",
  notAuthenticated: "not-authenticated",
  notAuthorized: "not-authorized",
  notFound: "not-found",
  notValid: "not-valid",
};


module.exports = AppError;
