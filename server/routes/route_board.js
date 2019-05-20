const express = require('express');
const router = express.Router();
const Board = require('../models/model_board')

/* board insert mongo */
router.post('/BoardForm', function (req, res) {
    var board = new Board();
    board.board_id = req.body.board_id;
    board.board_title = req.body.board_title;
    board.board_contents = req.body.board_contents;
    board.board_author = req.body.board_author;
   
    board.save(function (err) {
      if(err){
        console.log(err);
        res.redirect('/');
      }
      else{
        const newPost = new Board({
            board_id : req.body.board_id,
            board_title : req.body.board_title,
            board_contents : req.body.board_contents,
            board_author : req.body.board_author,
            board_date : req.body.board_date
        });
        res.json(newPost);
      }
    });
  });

  module.exports =router;