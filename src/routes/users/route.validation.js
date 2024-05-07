const { validate, body, param, query } = require("../../utils/validate");

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
