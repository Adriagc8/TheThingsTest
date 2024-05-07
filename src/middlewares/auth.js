const crypto = require("crypto");


function auth({ required = false }) {
  return async (req, res, next) => {
    if (!required) return next();
    try {
      const apiKey = req.headers["x-api-key"];
      // hash = crypto.createHash("sha256").update(apiKey).digest("hex");
      // console.log("hash", hash)
      if (apiKey !== process.env.PRIVATE_KEY) {
        throw new Error({
          message: "Not authenticated",
        });
      }
      next();
    } catch (error) {
      res.sendStatus(403);
    }
  };
}

module.exports = auth;
