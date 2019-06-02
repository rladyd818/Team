const express = require('express');
const router = express.Router();
const Board = require('../../models/board');
const Comment = require('../../models/comment');

/* board insert mongo */
router.post('/board/write', function (req, res) {
    var board = new Board();
    board.title = req.body.title;
    board.contents = req.body.contents;
    board.author = req.body.author;
  
    board.save(function (err) {
      if(err){
        console.log(err);
        res.redirect('/board');
      }
      res.redirect('/board');
    });
  });
  
  /* board find by id */
  router.get('/board/:id', function (req, res) {
      Board.findOne({_id: req.params.id}, function (err, board) {
          res.render('board', { title: 'Board', board: board });
      })
  });
  
  /* comment insert mongo*/
  router.post('/comment/write', function (req, res){
      var comment = new Comment();
      comment.contents = req.body.contents;
      comment.author = req.body.author;
  
      Board.findOneAndUpdate({_id : req.body.id}, { $push: { comments : comment}}, function (err, board) {
          if(err){
              console.log(err);
              res.redirect('/board');
          }
          res.redirect('/board/board/'+req.body.id);
      });
  });

  module.exports = router;