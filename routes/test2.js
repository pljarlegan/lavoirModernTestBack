const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  "use strict";
  res.send("test2 routes GET");
});

router.post("/", (req, res) => {
  "use strict";
  const list1 = req.body.list1,
    list2 = req.body.list2,
    result = list1.map((elem, index) => {
      return [ elem, list2[ index ] ];
    })
      .reduce((acc, item) => {
        return acc.concat(item);
      }, []);

  res.json(result);
});


module.exports = router;
