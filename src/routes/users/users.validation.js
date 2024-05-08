/**
 * Validation middleware for handling requests to the users endpoint.
 *
 * @module validation
 * @requires ../../utils/validate
 */
const { validate, body, param, query } = require("../../utils/validate");
/**
 * Validation rules for POST requests to the users endpoint.
 *
 * @typedef {Object} postValidation
 * @property {Object} body - The request body.
 * @property {String} body.name - The user's name. Must be a string, not empty, and no more than 64 characters long.
 * @property {String} body.surnames - The user's surnames. Must be a string, not empty, and no more than 264 characters long.
 */

/**
 * Validation rules for GET requests to the users endpoint.
 *
 * @typedef {Object} getValidation
 * @property {Object} query - The request query parameters.
 * @property {String} [query.name] - The user's name. Must be a string and no more than 64 characters long.
 * @property {String} [query.surnames] - The user's surnames. Must be a string and no more than 264 characters long.
 */

/**
 * The validation middleware for handling requests to the users endpoint.
 *
 * @type {Object}
 * @property {postValidation} post - The validation rules for POST requests.
 * @property {getValidation} get - The validation rules for GET requests.
 */
const validation = {
  post:
    validate([
      body("name")
        .exists()
        .isString()
        .notEmpty()
        .isLength({ max: 64 }),
      body("surnames")
        .exists()
        .isString()
        .notEmpty()
        .isLength({ max: 264 }),
    ]) ,
  get: validate([
    query("name")
      .optional()
      .isString() 
      .isLength({ max: 64 }),
    query("surnames")
      .optional()
      .isString()
      .isLength({ max: 264 }),
  ]),
};

module.exports = validation;
