var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("psy_test1진입");
  res.render('psy_test1');
});

module.exports = router;