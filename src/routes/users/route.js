const { Router } = require("../../utils/express");

const validation = require("./users.validation");
const controller = require("./users.controller");

const router = new Router();

router.get(validation.get, controller.get);

router.post(validation.post, controller.post);

module.exports = router;
