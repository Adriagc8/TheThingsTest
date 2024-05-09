/**
 * The main Express application file.
 * @module app
 * @requires express
 * @requires ./routes
 */
const express = require("express");
const routes = require("./routes");
/**
 * The Express application instance.
 * @type {express}
 */
const app = express();
/**
 * Middleware for parsing JSON request bodies.
 * @type {Function}
 */
app.use(express.json({ limit: "2mb", extended: true }));

/**
 * Middleware for parsing URL-encoded request bodies.
 * @type {Function}
 */
app.use(express.urlencoded({ limit: "2mb", extended: true }));
/**
 * Registers the routes with the Express application.
 * @type {Array}
 */
routes.forEach(({ url, auth, filePath }) => {
  app.use(url, auth, require(filePath).expressRouter);
});
/**
 * Starts the Express application and listens for incoming requests.
 * @type {Function}
 */
app.listen(process.env.PORT, () => {
console.log(`App running on port ${process.env.PORT}...`);
});  