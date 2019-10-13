const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  "use strict";
  res.send("ok");
});

router.use("/default", route("default"));
router.use("/test", route("test"));

module.exports = router;
