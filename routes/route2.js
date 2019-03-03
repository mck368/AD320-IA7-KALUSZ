var express = require('express');
var router = express.Router();
var colorObject = require( '../colors.json');

/* GET route2 listing. */
router.get('/all', function(req, res, next) {
    res.send(colorObject);
});

router.get('/:color', function(req, res, next) {
    var myColor = getColorByName(req.params.color);
    res.send(myColor);
});

function getColorByName(colorString) {
    for(var i = 0; i < colorObject.colors.length; i++) {
        if(colorObject.colors[i].color === colorString) {
            return colorObject.colors[i];
        }
    }
    return "Color doesn't exist."; 
}

module.exports = router;