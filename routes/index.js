var express = require('express');
var app = express();

//~~ Access movies ~~//
const movie = require('../controllers/movies');
app.use('/movie', movie);

//~~ Access users ~~//
const user = require('../controllers/users');
app.use('/user', user);

module.exports = app;
