const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  "use strict";
  res.send("test3 routes GET");
});

router.post("/", (req, res) => {
  "use strict";

  const result = 25;

  res.json(result);
});


module.exports = router;
