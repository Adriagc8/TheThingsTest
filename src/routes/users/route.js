/**
 * Module for creating an Express router for handling HTTP requests related to users.
 * @module users.router
 * @requires ../../utils/express
 * @requires ./users.validation
 * @requires ./users.controller
 */
const { Router } = require("../../utils/express");

const validation = require("./users.validation");
const controller = require("./users.controller");

/**
 * The Express router for handling HTTP requests related to users.
 * @type {Router}
 */
const router = new Router();
/**
 * Handles HTTP GET requests to find users.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>}
 */
router.get(validation.get, controller.get);
/**
 * Handles HTTP POST requests to create a new user.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {Promise<void>}
 */
router.post(validation.post, controller.post);

module.exports = router;
