const express = require("express");
const router = express.Router(),
  DefaultHelper = helper("Default");

router.get("/", (req, res) => {
  "use strict";
  res.send("test routes GET");
});

router.post("/for", (req, res) => {
  "use strict";
  res.json({ result: res });
});

router.post("/foreach", (req, res) => {
  "use strict";
  res.json({ result: 0 });
});

router.post("/while", (req, res) => {
  "use strict";
  res.json({ result: 0 });
});

router.post("/recursion", (req, res) => {
  "use strict";
  res.json({ result: 0 });
});

module.exports = router;
