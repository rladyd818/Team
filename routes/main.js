var express = require('express');
var router = express.Router();
//var axios = require('axios');
//var kakao = require('./javascripts/kakaoSDK');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("mainpage진입" );
  res.render('main', { name: 'LOGIN' } );
});

module.exports = router;
