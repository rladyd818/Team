var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("mainpage진입");
  res.render('main');
});

module.exports = router;
