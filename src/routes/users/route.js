const { Router } = require("../../utils/express");

const validation = require("./route.validation");
const controller = require("./route.controller");

const router = new Router();

router.get(validation.get, controller.get);

router.post(validation.post, controller.post);

module.exports = router;
