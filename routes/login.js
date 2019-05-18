var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('login', { title: 'login' });
});

router.post('/login', function(req, res, next){
    console.log(req.body);
   
    var id = req.body.user_id;
    var pwd = req.body.user_pwd;
   
    res.redirect('/');
  });

module.exports = router;