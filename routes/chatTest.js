var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("chatTest진입");
  if(req.session.user === undefined ) {
    res.send('로그인 후에 이용해주세요.');
    //res.render('main');
  }
  else {
    res.render('chatTest', { sess: req.session });
  }
});

module.exports = router;
