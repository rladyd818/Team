var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("alcoholic진입");
    res.render('alcoholic', { sess: req.session });
  }
);

module.exports = router;