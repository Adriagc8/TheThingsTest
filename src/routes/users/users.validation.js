/**
 * Module for validating HTTP requests related to users.
 * @module users.validation
 * @requires ../../utils/validate
 */
const { validate, body, query } = require("../../utils/validate");

const validation = {
  /**
   * Validation rules for POST requests to the users endpoint.
   *
   * @typedef {Object} postValidation
   * @property {Object} body - The request body.
   * @property {String} body.name - The user's name. Must be a string, not empty, and no more than 32 characters long.
   * @property {String} body.surnames - The user's surnames. Must be a string, not empty, and no more than 64 characters long.
   */
  post: validate([
    body("name")
      .exists()
      .withMessage("Name is required")
      .isString()
      .withMessage("Name must be String")
      .notEmpty()
      .withMessage("Name cannot be empty")
      .isLength({ max: 32 })
      .withMessage("Name max length 64"),
    body("surnames")
      .exists()
      .withMessage("Surnames is required")
      .isString()
      .withMessage("Surnames must be String")
      .notEmpty()
      .withMessage("Surnames cannot be empty")
      .isLength({ max: 64 })
      .withMessage("Surnames max length 64"),
  ]),
  /**
   * Validation rules for GET requests to the users endpoint.
   *
   * @typedef {Object} getValidation
   * @property {Object} query - The request query parameters.
   * @property {String} [query.name] - The user's name. Must be a string and no more than 32 characters long.
   * @property {String} [query.surnames] - The user's surnames. Must be a string and no more than 64 characters long.
   */
  get: validate([
    query("name")
      .optional()
      .isString()
      .withMessage("Name must be String")
      .isLength({ max: 32 })
      .withMessage("Name max length 64"),
    query("surnames")
      .optional()
      .isString()
      .withMessage("Surnames must be String")
      .isLength({ max: 64 })
      .withMessage("Surnames max length 64"),
  ]),
};

module.exports = validation;
