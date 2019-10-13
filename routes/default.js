const express = require("express");
const router = express.Router(),

  DefaultHelper = helper("Default");

router.get("/", (req, res) => {
  "use strict";
  DefaultHelper.default(null, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

router.post("/search", (req, res) => {
  "use strict";
  DefaultHelper.default(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

module.exports = router;
