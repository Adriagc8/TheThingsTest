const { validationResult, body, param, query } = require("express-validator");


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
};

module.exports = { validate, body, param, query };
