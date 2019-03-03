var express = require('express');
var router = express.Router();
var colorObject = require( '../colors.json');

function getColorByName(colorString) {
    for(var i = 0; i < colorObject.colors.length; i++) {
        if(colorObject.colors[i].color === colorString) {
            return colorObject.colors[i];
        }
    } 
}

/* GET route2 listing. */
router.get('/all', function(req, res, next) {
    res.send(colorObject);
});

router.get('/:colors', function(req, res, next) {
    var myColor = getColorByName(req.params.color);
    res.send(myColor);
});

module.exports = router;