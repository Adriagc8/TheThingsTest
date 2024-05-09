/**
 * The routes configuration for the Express application.
 * @module routes
 * @requires ./middlewares/auth
 */
const auth = require("./middlewares/auth");
/**
 * The array of route configurations.
 * @type {Array}
 */
const routes = [
  /**
   * The healthcheck route configuration.
   * @type {Object}
   */
  {
    url: "/healthcheck",
    auth: auth({ required: false }),
    filePath: "./routes/healthcheck/route",
  },
  /**
   * The users route configuration.
   * @type {Object}
   */
  {
    url: "/users",
    auth: auth({ required: true }),
    filePath: "./routes/users/route",
  },
];
module.exports = routes;
