const express = require('express');
const router = express.Router();
const Board = require('../models/model_board');
const db = require('../dbs/db');


router.get('/board/all', function(req,res){
    console.log("test test")
    Board.find({})
    .then(board => {
        if(board){
            res.send(board);
        }
    })
})

module.exports = router;