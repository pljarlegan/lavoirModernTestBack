const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  "use strict";
  res.send("test routes GET");
});

router.post("/for", (req, res) => {
  "use strict";
  let result = 0;
  for (let i = 0; i < req.body.list.length ; i++) {
    result += req.body.list[i];
  }
  res.json({ result });
});

router.post("/foreach", (req, res) => {
  "use strict";
  let result = 0;
  req.body.list.forEach((item) => result += item);
  res.json({ result });
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
