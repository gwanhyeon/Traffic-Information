const express = require('express');
const router = express.Router();
const Board = require('../models/model_board')

/* board insert mongo */
router.post('/board/write', function (req, res) {
    var board = new Board();
    board.title = req.body.title;
    board.contents = req.body.contents;
    board.author = req.body.author;
    // modle save
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
        console.log(newPost)
        res.send(newPost);
      }
    })
  });

  module.exports =router;