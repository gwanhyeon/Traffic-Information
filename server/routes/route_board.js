const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const Board = require('../models/model_board')
=======
const Board = require('../models/mdoel_board')
>>>>>>> f323a54d4725e081809df5c4d63369b8f25ab3c8

/* board insert mongo */
router.post('/board/write', function (req, res) {
    var board = new Board();
    board.title = req.body.title;
    board.contents = req.body.contents;
    board.author = req.body.author;
<<<<<<< HEAD
    // modle save
=======
   
>>>>>>> f323a54d4725e081809df5c4d63369b8f25ab3c8
    board.save(function (err) {
      if(err){
        console.log(err);
        res.redirect('/');
      }
      else{
<<<<<<< HEAD
=======

>>>>>>> f323a54d4725e081809df5c4d63369b8f25ab3c8
        const newPost = new Board({
            id : req.body.id,
            title : req.body.title,
            contents : req.body.contents,
            author : req.body.author,
            board_date : req.body.board_date
        });
<<<<<<< HEAD
        console.log(newPost)
        res.send(newPost);
      }
    })
=======
        res.json(newPost);
      }
    });
>>>>>>> f323a54d4725e081809df5c4d63369b8f25ab3c8
  });

  module.exports =router;