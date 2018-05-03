'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send("ok");
});

router.use("/default", route("default"));

module.exports = router;