var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("counselor진입");
  if(req.session.user.id === 'LOGIN' || req.session.user === undefined ) {
    res.send(error);
    //res.render('main');
  }
  else {
    res.render('counselor', { sess: req.session });
  }
});

module.exports = router;
