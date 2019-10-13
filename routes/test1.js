const express = require("express");
const router = express.Router(),
  calcFor = (list) => {
    let result = 0;
    for (let i = 0; i < list.length ; i++) {
      result += list[i];
    }
    return result;
  },
  calcForEach = (list) => {
    let result = 0;
    list.forEach((item) => result += item);
    return result;
  },
  calcWhile = (list) => {
    let result = 0;
    while (list.length > 0) {
      result += list.pop();
      if (list.length === 0) {
        return result;
      }
    }
  },
  calcRecursion = (list) => {
    const calc = (items, result) => {
      result += items.pop();
      if (items.length > 0) {
        return calc(items, result);
      }
      return result;
    };
    return calc(list, 0);
  };

router.get("/", (req, res) => {
  "use strict";
  res.send("test routes GET");
});

router.post("/for", (req, res) => {
  "use strict";
  res.json({ result: calcFor(req.body.list) });
});

router.post("/foreach", (req, res) => {
  "use strict";
  res.json({ result: calcForEach(req.body.list) });
});

router.post("/while", (req, res) => {
  "use strict";
  res.json({ result: calcWhile(req.body.list) });
});

router.post("/recursion", (req, res) => {
  "use strict";
  res.json({ result: calcRecursion(req.body.list) });
});

module.exports = router;
