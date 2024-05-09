/**
 * Module for handling HTTP requests related to users.
 * @module users.controller
 * @requires ./users.service
 */
const { createUser, getUsers } = require("./users.service");

const controller = {
  /**
   * Handles HTTP POST requests to create a new user.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @returns {Promise<void>}
   */
  async post({ req, res }) {
    const { name, surnames } = req.body;
    const user = await createUser(name, surnames);
    res.status(200).json({ user });
  },
  /**
   * Handles HTTP GET requests to find users.
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @returns {Promise<void>}
   */
  async get({ req, res }) {
    const { name, surnames } = req.query;
    const users = await getUsers(name, surnames);
    res.status(200).json({ users });
  },
};

module.exports = controller;
