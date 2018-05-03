'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

global.__base = __dirname + '/';
require(__dirname + '/wrapper');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', require(__dirname + '/routes'));

module.exports = app;
