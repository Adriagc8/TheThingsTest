const auth = require("./middlewares/auth");

const routes = [
    {
      url: "/healthcheck",
      auth: auth({ required: false }),
      filePath: "./routes/healthcheck/route",
    },
    {
      url: "/users",
      auth: auth({ required: true }),
      filePath: "./routes/users/route",
    },
]
module.exports = routes;