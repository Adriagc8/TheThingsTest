const { Router } = require("../../utils/express");

const controller = require("./route.controller");

const router = new Router();

router.get(controller.get);

module.exports = router;
