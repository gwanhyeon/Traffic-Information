const express = require('express');
const router = express.Router();
const passport = require('../jwt/passport');
const Board = require('../models/model_board');

/* board find by id */
router.delete('/board_delete/:board_id', function (req, res) {
    Board.remove({
       board_id : req.params.board_id
    })
    .then(board => {
        if(board){
            res.send(board);
        }
    });
});

module.exports = router;