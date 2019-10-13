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
  let result = 0;
  const list = req.body.list;

  while (list.length > 0) {
    result += list.pop();
    if (list.length === 0) {
      res.json({ result });
    }
  }
});

router.post("/recursion", (req, res) => {
  "use strict";
  const list = req.body.list,
    calc = (items, result) => {
      result += items.pop();
      if (items.length > 0) {
        return calc(items, result);
      }
      return result;
    };
  res.json({ result: calc(list, 0) });
});

module.exports = router;
