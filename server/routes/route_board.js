const express = require('express');
const router = express.Router();
const Board = require('../models/mdoel_board')

/* board insert mongo */
router.post('/board/write', function (req, res) {
    var board = new Board();
    board.title = req.body.title;
    board.contents = req.body.contents;
    board.author = req.body.author;
   
    board.save(function (err) {
      if(err){
        console.log(err);
        res.redirect('/');
      }
      else{

        const newPost = new Board({
            id : req.body.id,
            title : req.body.title,
            contents : req.body.contents,
            author : req.body.author,
            board_date : req.body.board_date
        });
        res.json(newPost);
      }
    });
  });

  module.exports =router;