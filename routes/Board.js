var express = require('express');
var router = express.Router();
var Board = require('../models/board');

/* GET home page. */
router.get('/', function(req, res, next) {
  Board.find({}, function (err, board) {
      res.render('BoardTest', { title: '게시판', board: board });
  });
});

/* Write board page */
router.get('/write', function(req, res, next) {
    res.render('BoardWrite', { title: '글쓰기' });
});

module.exports = router;
