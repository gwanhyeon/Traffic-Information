const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/model_user');

router.post('/signin',(req,res) =>{
    User.findOne({email: req.body.email})
    .exec()
    .then((user) =>{            //todo 현재 모델 값들 exec() 시킨후 찾은 이메일 값으로 -> all json data -> user
        bcrypt.compare(req.body.password, user.password, (err,result) =>{
            user.auth = result;
            console.log(user);
            if(err){
                return res.status(401).json({
                    failed : "unauthorzied Access1"
                })
            }
            //todo input user data value validation(result == true 일경우 회원가입된 사람)
            if(result){
                const JWTToekn = jwt.sign({
                    email : user.email,
                    _id: user._id
                },
                'secret',
                {
                    expiresIn: '2h'
                });
                return res.status(200).json({
                    success: 'welcome to the JWT AUTH',
                    token: JWTToekn

                });
            }
            return res.status(401).json({
                failed : "Unauthorized Access2"
            })
        })

    }).catch(error =>{
        res.status(500).json({
            error : error
        });
    });
});
module.exports = router;

