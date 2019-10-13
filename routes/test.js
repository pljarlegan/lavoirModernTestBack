const express = require("express");
const router = express.Router(),
  DefaultHelper = helper("Default");

router.get("/", (req, res) => {
  "use strict";
  res.send("test routes GET");
});


module.exports = router;
