var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("login2진입");
  res.render('login2');
});

module.exports = router;
