var express = require('express');
var router = express.Router();
var fs = require('fs');
var color = require( '../colors.json');

/* GET route2 listing. */
router.get('/all', function(req, res, next) {
    res.send(color);
});

router.get('/black', function(req, res, next) {
    var black = color.colors[0];
    res.send(black);
});

router.get('/white', function(req, res, next) {
    var white = color.colors[1];
    res.send(white);
});

router.get('/red', function(req, res, next) {
    var red = color.colors[2];
    res.send(red);
});

router.get('/blue', function(req, res, next) {
    var blue = color.colors[3];
    res.send(blue);
});

router.get('/yellow', function(req, res, next) {
    var yellow = color.colors[4];
    res.send(yellow);
});

router.get('/green', function(req, res, next) {
    var green = color.colors[5];
    res.send(green);
});

module.exports = router;