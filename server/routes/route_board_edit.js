const express = require('express');
const router = express.Router();
const passport = require('../jwt/passport');
const Board = require('../models/model_board');

/* board find by id */
router.put('/board_edit/:board_id', function (req, res) {
    Board.update({
       board_id : req.params.board_id
    },{
        $set: {
            board_title : req.body.board_title,
            board_contents : req.body.board_contents
        }
    })
    .then(board => {
        if(board){
            res.send(board);
        }
    });
});

module.exports = router;