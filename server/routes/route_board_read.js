const express = require('express');
const router = express.Router();
const passport = require('../jwt/passport');
const Board = require('../models/model_board');

/* board find by id */
router.get('/board_read', function (req, res) {
    Board.findOne({
        board_id: req.params.board_id
    }).then(user =>{
        if(user){
            res.send(user);
        }
    })
});

module.exports = router;