const express = require('express');
const router = express.Router();
const passport = require('../jwt/passport');
const Board = require('../models/model_board');

/* board find by id */
router.get('/board', function (req, res) {
    console.log("board connect");
    Board.findOne({
        id: req.params.id
    }).then(user =>{
        if(user){
            res.send(user);
        }

    })
});

router.get('/board_list', function (req, res) {
    Board.find().then(user =>{
        if(user){
            res.send(user);
            console.log("find");
        }

    })
});

module.exports = router;