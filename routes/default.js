'use strict';

const express = require('express');
const router = express.Router();

const DefaultHelper = helper('Default');

router.get('/', function(req, res) {
    DefaultHelper.default(null, function (err, result) {
        if (err) return res.status(500).json({'error': err});
        res.json(result);
    })
});

router.post('/search', function(req, res) {
    DefaultHelper.default(req.body, function (err, result) {
        if (err) return res.status(500).json({'error': err});
        res.json(result);
    })
});

module.exports = router;
