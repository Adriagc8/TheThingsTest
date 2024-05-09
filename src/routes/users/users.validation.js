const { validate, body, param, query } = require("../../utils/validate");

const validation = {
  post:
    validate([
      body("name")
        .exists()
        .withMessage('Name is required')
        .isString()
        .withMessage('Name must be String')
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isLength({ max: 64 })
        .withMessage('Name max length 64'),
      body("surnames")
        .exists()
        .withMessage('Surnames is required')
        .isString()
        .withMessage('Surnames must be String')
        .notEmpty()
        .withMessage('Surnames cannot be empty')
        .isLength({ max: 264 })
        .withMessage('Surnames max length 264'),
    ]) ,
  get: validate([
    query("name")
      .optional()
      .isString() 
      .withMessage('Name must be String')
      .isLength({ max: 64 })
      .withMessage('Name max length 64'),
    query("surnames")
      .optional()
      .isString()
      .withMessage('Surnames must be String')
      .isLength({ max: 264 })
      .withMessage('Surnames max length 264'),
  ]),
};

module.exports = validation;
