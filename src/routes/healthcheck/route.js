/**
 * Module for creating an Express router for handling HTTP requests related to the health check endpoint.
 * @module healthcheck.router
 * @requires ../../utils/express
 * @requires ./healthcheck.controller
 */
const { Router } = require("../../utils/express");
const controller = require("./healthcheck.controller");

/**
 * The Express router for handling HTTP requests related to the health check endpoint.
 * @type {Router}
 */
const router = new Router();

router.get(controller.get);

module.exports = router;
