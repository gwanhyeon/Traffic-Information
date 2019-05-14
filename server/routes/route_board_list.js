const express = require('express');
const router = express.Router();
const passport = require('../jwt/passport');
const Board = require('../models/model_board');

/* board find by id */
router.get('/board/:id', function (req, res) {
    Board.findOne({
        id: req.params.id
    }).then(user =>{
        if(user){
            res.send(user);
        }

    })
});

module.exports = router;