/**
 * Middleware function for authenticating HTTP requests.
 * @module auth
 * @param {Object} options - The options for the middleware.
 * @param {Boolean} [options.required=false] - Whether authentication is required.
 * @returns {Function} The middleware function.
 */
function auth({ required = false }) {
  return async (req, res, next) => {
    if (!required) return next();
    try {
      const apiKey = req.headers["x-api-key"];
      if (apiKey !== process.env.PRIVATE_KEY) {
        throw new Error({
          message: "Not authenticated",
        });
      }
      next();
    } catch (error) {
      res.sendStatus(403);
    }
  };
}

module.exports = auth;
