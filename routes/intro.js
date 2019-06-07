var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("intro진입");
  res.render('intro', { sess: req.session });
});

module.exports = router;
