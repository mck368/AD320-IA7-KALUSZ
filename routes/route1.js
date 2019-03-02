var express = require('express');
var router = express.Router();

/* GET route1 listing. */
router.get('/', function(req, res, next) {
  res.render('route1');
});

module.exports = router;
