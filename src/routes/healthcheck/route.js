const { Router } = require("../../utils/express");

const controller = require("./healthcheck.controller");

const router = new Router();

router.get(controller.get);

module.exports = router;
