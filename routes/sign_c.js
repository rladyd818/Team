var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("sign_c진입");
    res.render('sign_c', { sess: req.session });
  }
);

module.exports = router;