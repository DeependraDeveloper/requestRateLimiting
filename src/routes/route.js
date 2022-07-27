const express = require("express");
const router = express.Router();

const controller = require("../constroller/requestController");
const { ipMiddleware, limiter } = require("../middlewares/mid");

router.get("/endpoint", ipMiddleware, limiter, controller.incomingRequest);

module.exports = router;
