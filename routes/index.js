const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  "use strict";
  res.send("ok");
});

router.use("/default", route("default"));
router.use("/test1", route("test1"));

module.exports = router;
