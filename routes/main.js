var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;
  if(req.session.user === undefined) {
    console.log('세션 undefined');
    sess.user = {
      id: 'LOGIN' 
    }
  }
  res.render('main', { sess });
});

module.exports = router;
