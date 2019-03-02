var express = require('express');
var router = express.Router();
var fs = require('fs');
var color = require( '../colors.json');

var contents = fs.readFileSync("./colors.json");
var jsonContent = JSON.parse(contents);

/* GET route2 listing. */
router.get("/:colors", function(req, res, next) {
    res.json(jsonContent.colors[0]);
});

module.exports = router;