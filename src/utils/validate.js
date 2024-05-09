/**
 * Module for validating HTTP requests using express-validator.
 * @module validation
 * @requires express-validator
 */
const { validationResult, body, param, query } = require("express-validator");
/**
 * Validates an HTTP request using the provided validations.
 * @param {Array} validations - The validations to run.
 * @returns {Function} The validation middleware function.
 */
function validate(validations) {
  return async ({ req, res, next }) => {
    for (const validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    console.log(errors.array());
    res.status(400).json({ errors: errors.array() });
  };
}

module.exports = { validate, body, param, query };
