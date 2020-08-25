/**
 * Add all routes here
 */

const express = require("express");
const router = new express.Router();

const BaseController = require("./controllers/BaseController");

router.get("/", BaseController.renderData);

module.exports = router;
