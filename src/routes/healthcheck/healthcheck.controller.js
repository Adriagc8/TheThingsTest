/**
 * Module for handling HTTP requests related to the health check endpoint.
 * @module healthcheck.controller
 * @requires ./healthcheck.service
 */
const { getHealthcheck } = require("./healthcheck.service");

const controller = {
  /**
   * Handles HTTP GET requests to the health check endpoint.
   * @param {Object} res - The HTTP response object.
   * @returns {Promise<void>}
   */
  async get({ res }) {
    const data = getHealthcheck();
    res.status(200).json(data);
  },
};

module.exports = controller;
