var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("counselor진입");
  res.render('counselor');
});

module.exports = router;
