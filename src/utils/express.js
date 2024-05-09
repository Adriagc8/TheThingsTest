/**
 * Module for creating an Express router with additional functionality.
 * @module Router
 * @requires express
 */
const { Router: ExpressRouter } = require("express");

class Router {
  /**
   * Creates a new instance of Router.
   */
  constructor() {
    this.expressRouter = new ExpressRouter({ mergeParams: true });
  }
  /**
   * Adds a GET route to the router.
   * @param {...Function} callbacks - The callback functions for the route.
   * @returns {Router} The router instance.
   */
  get(...callbacks) {
    this.expressRouter.get("/", callbacks.flat().map(createMiddleware));
  }
  /**
   * Adds a POST route to the router.
   * @param {...Function} callbacks - The callback functions for the route.
   * @returns {Router} The router instance.
   */
  post(...callbacks) {
    this.expressRouter.post("/", callbacks.flat().map(createMiddleware));
  }
  /**
   * Adds a PUT route to the router.
   * @param {...Function} callbacks - The callback functions for the route.
   * @returns {Router} The router instance.
   */
  put(...callbacks) {
    this.expressRouter.put("/", callbacks.flat().map(createMiddleware));
  }
  /**
   * Adds a DELETE route to the router.
   * @param {...Function} callbacks - The callback functions for the route.
   * @returns {Router} The router instance.
   */
  delete(...callbacks) {
    this.expressRouter.delete("/", callbacks.flat().map(createMiddleware));
  }
}
/**
 * Creates a middleware function from a callback function.
 * @param {Function} callback - The callback function.
 * @returns {Function} The middleware function.
 */
function createMiddleware(callback) {
  return async (req, res, next) => {
    try {
      await callback({ req, res, next });
    } catch (err) {
      next(err);
    }
  };
}
/**
 * Creates an error middleware function from a callback function.
 * @param {Function} callback - The callback function.
 * @returns {Function} The error middleware function.
 */
function createErrorMiddleware(callback) {
  return async (err, req, res, next) => {
    try {
      await callback({ err, req, res, next });
    } catch (err) {
      next(err);
    }
  };
}
module.exports = { Router, createMiddleware, createErrorMiddleware };
