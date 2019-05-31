const express = require('express');
const router = express.Router();
const passport = require('../jwt/passport');
const Board = require('../models/model_board');

/* board find by id */
router.get('/board_read/:board_id', function (req, res) {
    Board.find({
       board_id : req.params.board_id
    }
    ).then(board =>{
        if(board){
            res.send(board);
        }
    })
});

module.exports = router;