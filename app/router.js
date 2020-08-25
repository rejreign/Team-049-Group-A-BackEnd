/**
 * Add all routes here
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "You have successfully hit the base route",
  });
});

module.exports = router;
