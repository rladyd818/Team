var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("counselor_intro진입");
  if(req.session.user === undefined) {
    res.send('로그인 후에 이용해주세요.');
  }
  else if(req.session.user.id === 'LOGIN') {
    res.send('로그인 후에 이용해주세요.');
  }
  else {
    res.render('counselor_intro', { sess: req.session });
  }
});

module.exports = router;
